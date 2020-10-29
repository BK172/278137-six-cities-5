import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import leaflet from "leaflet";
import {offerPropTypes, citiesPropTypes} from "../../app-prop-types";
import {mapClasses} from "../../utils";
import "leaflet/dist/leaflet.css";

class Map extends PureComponent {
  _update() {
    const {offers, activeOffer, activeCity} = this.props;
    const city = activeCity.coordinates;
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    this.activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
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

    offers.forEach(({offerId, coordinates, title}) => {
      const activeOfferId = activeOffer && activeOffer.offerId;
      const offerIcon = (activeOfferId === offerId) ? this.activeIcon : this.icon;

      leaflet
        .marker(coordinates, {icon: offerIcon, title})
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
  activeOffer: PropTypes.oneOfType([
    offerPropTypes,
    PropTypes.oneOf([null]).isRequired,
  ]),
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  activeCity: state.activeCity,
  activeOffer: state.activeOffer,
});

export {Map};
export default connect(mapStateToProps)(Map);
