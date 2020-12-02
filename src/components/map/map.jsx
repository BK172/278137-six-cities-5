import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import leaflet from "leaflet";
import {setActiveOffer} from "../../store/reducers/app-process/actions";
import {getActiveOffer, getActiveCity} from "../../store/reducers/app-process/selectors";
import {offersPropTypes, cityPropTypes, offerOrNullPropTypes} from "../../app-prop-types";
import {MapClasses, MAP_TILE_LAYER, MAP_TILE_LAYER_ATTRIBUTION} from "../../constants";
import "leaflet/dist/leaflet.css";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.markers = [];
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    this.activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
    this.map = null;

    this.state = {
      chosenOfferId: ``,
    };
  }

  componentDidMount() {
    const {offers, activeCity, currentOffer} = this.props;
    const city = activeCity.name !== offers[0].city.name ? offers[0].city : activeCity;
    const center = city.coordinates;
    const zoom = city.zoom;

    this.map = leaflet.map(`map`, {
      center,
      zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(MAP_TILE_LAYER, {
        attribution: MAP_TILE_LAYER_ATTRIBUTION
      })
      .addTo(this.map);

    this._addMarkers(offers, currentOffer);
    this.map.flyTo(center, zoom);
  }

  componentDidUpdate() {
    const {offers, activeCity, currentOffer, activeOffer, setActiveOfferAction} = this.props;
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

      if (activeOffer) {
        this.setState({chosenOfferId: ``});
        setActiveOfferAction(null);
      }
    });
  }

  _addMarkers(offers, currentOffer) {
    const {activeOffer, setActiveOfferAction} = this.props;
    const activeOfferId = activeOffer && activeOffer.offerId;
    const {chosenOfferId} = this.state;

    offers.forEach((offer) => {
      const {offerId, coordinates, title} = offer;
      const offerIcon = (activeOfferId === offerId) ? this.activeIcon : this.icon;
      const marker = leaflet
        .marker(coordinates, {icon: offerIcon, title})
        .addTo(this.map);

      marker._offerId = offerId;

      marker.on(`mouseover`, () => {
        marker.setIcon(this.activeIcon);
      });

      marker.on(`mouseout`, () => {
        if (activeOffer && offerId !== activeOffer.offerId || chosenOfferId !== marker._offerId) {
          marker.setIcon(this.icon);
        }
      });

      marker.on(`click`, () => {
        marker.setIcon(this.activeIcon);
        this.setState({chosenOfferId: offer.offerId});
        setActiveOfferAction(offer);
      });

      this.markers.push(marker);
    });

    if (currentOffer) {
      const marker = leaflet
        .marker(
            currentOffer.coordinates,
            {icon: this.activeIcon, title: currentOffer.title}
        )
        .addTo(this.map);

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
  setActiveOfferAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({PROCESS}) => ({
  activeCity: getActiveCity({PROCESS}),
  activeOffer: getActiveOffer({PROCESS}),
  setActiveOfferAction: PROCESS.setActiveOfferAction,
});

const mapDispatchToProps = ((dispatch) => ({
  setActiveOfferAction(activeOffer) {
    dispatch(setActiveOffer(activeOffer));
  },
}));

export {Map};
export default connect(mapStateToProps, mapDispatchToProps)(Map);
