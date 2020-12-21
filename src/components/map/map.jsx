import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import leaflet from "leaflet";
import {Events, scroller} from "react-scroll";
import {getActiveOffer, getActiveCity} from "../../store/reducers/app-process/selectors";
import {offersPropTypes, cityPropTypes, offerOrNullPropTypes} from "../../app-prop-types";
import {
  MapClasses,
  MAP_TILE_LAYER,
  MAP_TILE_LAYER_ATTRIBUTION,
  scrollSettings,
  SCROLL_OFFSET,
} from "../../constants";
import {extend} from "../../utils";
import "leaflet/dist/leaflet.css";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.markers = [];
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });
    this.activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30],
    });
    this.selectedIcon = leaflet.icon({
      iconUrl: `img/pin-selected.svg`,
      iconSize: [30, 30],
    });
    this.tooltipSettings = {
      direction: `top`,
      offset: [0, -10],
    };
    this.map = null;
  }

  componentDidMount() {
    const {offers, activeCity, currentOffer} = this.props;
    const city = activeCity.name !== offers[0].city.name ? offers[0].city : activeCity;
    const center = city.coordinates;
    const zoom = city.zoom;

    this.map = leaflet.map(`map`, {
      center,
      zoom,
      marker: true,
    });

    leaflet
      .tileLayer(MAP_TILE_LAYER, {
        attribution: MAP_TILE_LAYER_ATTRIBUTION,
      })
      .addTo(this.map);

    this._addMarkers(offers, currentOffer);
    this.map.flyTo(center, zoom);
  }

  componentDidUpdate() {
    const {offers, activeCity, currentOffer, activeOffer} = this.props;
    const city = activeCity.name !== offers[0].city.name ? offers[0].city : activeCity;
    const center = city.coordinates;
    const zoom = city.zoom;

    this._removeMarkers();
    this._addMarkers(offers, currentOffer);

    if (activeOffer) {
      this.map.flyTo(activeOffer.coordinates, zoom);
    } else {
      this.map.flyTo(center, zoom);
    }

    this.map.on(`mouseout`, () => {
      this.map.flyTo(center, zoom);
    });
  }

  _scrollToWithContainer(offerId) {
    const {scrollContainerId, scrollContainerName} = this.props;

    if (scrollContainerId) {
      const goToContainer = new Promise((resolve) => {
        Events.scrollEvent.register(`end`, () => {
          resolve();
          Events.scrollEvent.remove(`end`);
        });

        scroller.scrollTo(scrollContainerName, scrollSettings);
      });

      goToContainer.then(() =>
        scroller.scrollTo(`offerId=${offerId}`, extend(scrollSettings, {
          containerId: scrollContainerId,
          offset: SCROLL_OFFSET,
        }))
      );
    }
  }

  _getOfferIcon(selectedOfferId, activeOfferId, offerId) {
    if (activeOfferId && activeOfferId === offerId) {
      return this.activeIcon;
    } else if (selectedOfferId && selectedOfferId === offerId) {
      return this.selectedIcon;
    }

    return this.icon;
  }

  _addMarkers(offers, currentOffer) {
    const {activeOffer, selectedOfferId, onChangeSelectedOfferId = () => false} = this.props;
    const activeOfferId = activeOffer && activeOffer.offerId;

    offers.forEach((offer) => {
      const {offerId, coordinates, title} = offer;

      const marker = leaflet
        .marker(coordinates, {
          icon: this._getOfferIcon(selectedOfferId, activeOfferId, offerId)
        })
        .addTo(this.map)
        .bindTooltip(title, this.tooltipSettings);

      marker._offerId = offerId;

      marker.on(`mouseover`, () => {
        marker.setIcon(this.activeIcon);
      });

      marker.on(`mouseout`, () => {
        if (selectedOfferId === marker._offerId) {
          marker.setIcon(this.selectedIcon);
        } else {
          marker.setIcon(this.icon);
        }
      });

      marker.on(`click`, () => {
        if (!currentOffer) {
          onChangeSelectedOfferId(offer.offerId);
          marker.setIcon(this.selectedIcon).openTooltip();
          this._scrollToWithContainer(marker._offerId);
        }
      });

      this.markers.push(marker);
    });

    if (currentOffer) {
      const marker = leaflet.marker(
          currentOffer.coordinates,
          {icon: this.selectedIcon}
      )
        .addTo(this.map)
        .bindTooltip(currentOffer.title, this.tooltipSettings);

      this.markers.push(marker);
    }
  }

  _removeMarkers() {
    this.markers.forEach((item) => {
      item.removeFrom(this.map);
    });

    this.markers = [];
  }

  render() {
    const {mapType} = this.props;
    return <section id="map" className={`${MapClasses[mapType]} map`}></section>;
  }
}

Map.propTypes = {
  mapType: PropTypes.string.isRequired,
  offers: offersPropTypes,
  currentOffer: offerOrNullPropTypes,
  activeCity: cityPropTypes,
  activeOffer: offerOrNullPropTypes,
  selectedOfferId: PropTypes.number,
  scrollContainerId: PropTypes.string,
  scrollContainerName: PropTypes.string,
  onChangeSelectedOfferId: PropTypes.func,
};

const mapStateToProps = ({PROCESS}) => ({
  activeCity: getActiveCity({PROCESS}),
  activeOffer: getActiveOffer({PROCESS}),
});

export {Map};
export default connect(mapStateToProps)(Map);
