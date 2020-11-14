import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "redux";
import withToggle from "../../hocs/with-toggle/with-toggle";
import {ActionCreator} from "../../store/action";
import {offerPropTypes} from "../../app-prop-types";
import {SortingTypes, getSortedOffers} from "../../utils";
import clsx from "clsx";

const SortingOptions = ({
  offers,
  sortOffers,
  sortingType,
  changeSortingType,
  isToggleActive,
  onToggleChange
}) => {
  const onListItemClick = (filter) => {
    onToggleChange(false);
    changeSortingType(filter);
    sortOffers(getSortedOffers(offers, filter));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={onToggleChange}
      >
        &nbsp;{SortingTypes[sortingType]}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={clsx(`places__options places__options--custom`, {'places__options--opened': isToggleActive})}>
        {
          Object.keys(SortingTypes).map((item) => (
            <li
              key={item}
              className={clsx(`places__option`, {'places__option--active': sortingType === item})}
              tabIndex={0}
              onClick={() => onListItemClick(item)}
            >
              {SortingTypes[item]}
            </li>
          ))
        }
      </ul>
      {/* <select class="places__sorting-type" id="places-sorting">
        <option class="places__option" value="popular" selected="">Popular</option>
        <option class="places__option" value="to-high">Price: low to high</option>
        <option class="places__option" value="to-low">Price: high to low</option>
        <option class="places__option" value="top-rated">Top rated first</option>
      </select> */}
    </form>
  );
};

SortingOptions.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  sortingType: PropTypes.string.isRequired,
  changeSortingType: PropTypes.func.isRequired,
  sortOffers: PropTypes.func.isRequired,
  isToggleActive: PropTypes.bool.isRequired,
  onToggleChange: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, PROCESS}) => ({
  offers: DATA.offers,
  sortingType: PROCESS.sortingType,
  changeSortingType: PROCESS.changeSortingType,
  sortOffers: DATA.sortOffers,
});

const mapDispatchToProps = ((dispatch) => ({
  changeSortingType(sortingType) {
    dispatch(ActionCreator.changeSortingType(sortingType));
  },
  sortOffers(offers) {
    dispatch(ActionCreator.sortOffers(offers));
  },
}));

export {SortingOptions};

const enhance = compose(
    withToggle,
    connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(SortingOptions);
