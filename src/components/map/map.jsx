import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import leaflet from "leaflet";
import {offerPropTypes, citiesPropTypes} from "../../app-prop-types";
import {mapClasses} from "../../utils";
import "leaflet/dist/leaflet.css";

class Map extends PureComponent {
  _update() {
    const {offers, activeCity} = this.props;
    const city = activeCity.coordinates;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    this.map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    offers.forEach((offer) => {
      leaflet
        .marker(offer.coordinates, {icon})
        .addTo(this.map);
    });

    this.map.setView(city, zoom);
  }

  componentDidMount() {
    this._update();
  }

  componentDidUpdate() {
    this.map.remove();
    this._update();
  }

  render() {
    const {mapType} = this.props;

    return (
      <section id="map" className={`${mapClasses[mapType]} map`}></section>
    );
  }
}

Map.propTypes = {
  mapType: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  activeCity: citiesPropTypes,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  activeCity: state.activeCity,
});

export {Map};
export default connect(mapStateToProps)(Map);
