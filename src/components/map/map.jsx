import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import leaflet from "leaflet";
import {getActiveOffer, getActiveCity} from "../../store/selectors";
import {offersPropTypes, cityPropTypes, offerOrNullPropTypes} from "../../app-prop-types";
import {MapClasses} from "../../constants";
import "leaflet/dist/leaflet.css";

class Map extends PureComponent {
  componentDidMount() {
    const {offers, activeCity} = this.props;
    const city = activeCity.name !== offers[0].city.name ? offers[0].city : activeCity;
    const center = city.coordinates;
    const zoom = city.zoom;

    this.markers = [];
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    this.activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
    this.map = leaflet.map(`map`, {
      center,
      zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this._addMarkers(offers);
    this.map.setView(center, zoom);
  }

  componentDidUpdate() {
    const {offers, activeCity} = this.props;
    const city = activeCity.name !== offers[0].city.name ? offers[0].city : activeCity;
    const center = city.coordinates;
    const zoom = city.zoom;

    this._removeMarkers();
    this._addMarkers(offers);
    this.map.setView(center, zoom);
  }

  _addMarkers(offers) {
    const {activeOffer} = this.props;
    const activeOfferId = activeOffer && activeOffer.offerId;

    offers.forEach(({offerId, coordinates, title}) => {
      const offerIcon = (activeOfferId === offerId) ? this.activeIcon : this.icon;
      const marker = leaflet
        .marker(coordinates, {icon: offerIcon, title})
        .addTo(this.map);

      this.markers.push(marker);
    });
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
  activeCity: cityPropTypes,
  activeOffer: offerOrNullPropTypes,
};

const mapStateToProps = ({PROCESS}) => ({
  activeCity: getActiveCity({PROCESS}),
  activeOffer: getActiveOffer({PROCESS}),
});

export {Map};
export default connect(mapStateToProps)(Map);
