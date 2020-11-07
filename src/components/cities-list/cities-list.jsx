import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {citiesPropTypes} from "../../app-prop-types";
import clsx from "clsx";

const CitiesList = ({cities, activeCity, changeCity}) => {
  const onLocationClick = (evt, city) => {
    evt.preventDefault();
    changeCity(city);
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city.cityId}>
          <a
            className={`locations__item-link tabs__item ${clsx(activeCity.name === city.name && `tabs__item--active`)}`}
            href="#"
            onClick={(evt) => onLocationClick(evt, city)}
          >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(citiesPropTypes).isRequired,
  activeCity: citiesPropTypes,
  changeCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
