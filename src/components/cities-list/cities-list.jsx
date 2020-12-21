import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {scroller} from "react-scroll";
import clsx from "clsx";
import {setActiveCity} from "../../store/reducers/app-process/actions";
import {getCities} from "../../store/reducers/app-data/selectors";
import {getActiveCity} from "../../store/reducers/app-process/selectors";
import {cityPropTypes, citiesPropTypes} from "../../app-prop-types";
import {scrollSettings, SCROLL_OFFSET} from "../../constants";
import {extend} from "../../utils";

const CitiesList = ({
  cities,
  activeCity,
  scrollContainerId,
  scrollContainerName,
  onChangeSelectedOfferId,
  setActiveCityAction,
}) => {
  const onLocationClick = (evt, city) => {
    evt.preventDefault();

    setActiveCityAction(city);

    if (scrollContainerId && scrollContainerName && onChangeSelectedOfferId) {
      onChangeSelectedOfferId(-1);
      scroller.scrollTo(scrollContainerName, extend(scrollSettings, {
        containerId: scrollContainerId,
        offset: SCROLL_OFFSET,
      }));
    }
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city.name}>
          <a
            className={clsx(`locations__item-link tabs__item`,
                {'tabs__item--active': activeCity.name === city.name})}
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
  cities: citiesPropTypes,
  activeCity: cityPropTypes,
  scrollContainerId: PropTypes.string,
  scrollContainerName: PropTypes.string,
  onChangeSelectedOfferId: PropTypes.func,
  setActiveCityAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, PROCESS}) => ({
  cities: getCities({DATA}),
  activeCity: getActiveCity({PROCESS}),
});

const mapDispatchToProps = (dispatch) => ({
  setActiveCityAction(activeCity) {
    dispatch(setActiveCity(activeCity));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
