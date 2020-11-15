import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setActiveCity} from "../../store/action";
import {citiesPropTypes} from "../../app-prop-types";
import clsx from "clsx";

const CitiesList = ({cities, activeCity, setActiveCityAction}) => {
  const onLocationClick = (evt, city) => {
    evt.preventDefault();
    setActiveCityAction(city);
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city.name}>
          <a
            className={clsx(`locations__item-link tabs__item`, {'tabs__item--active': activeCity.name === city.name})}
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
  setActiveCityAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, PROCESS}) => ({
  cities: DATA.cities,
  activeCity: PROCESS.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveCityAction(activeCity) {
    dispatch(setActiveCity(activeCity));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
