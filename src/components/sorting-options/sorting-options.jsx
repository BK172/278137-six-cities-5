import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {offerPropTypes} from "../../app-prop-types";
import {SortingType} from "../../utils";

const SortingOptions = ({offers, activeSortingOption, changeSortingType, sortingToggleFlag, toggleSortingList, sortOffers}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => toggleSortingList(!sortingToggleFlag)}
      >
        {activeSortingOption}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${sortingToggleFlag ? `places__options--opened` : ``}`}>
        {
          Object.values(SortingType).map((item) => (
            <li
              key={item}
              className={`places__option ${activeSortingOption === item ? `places__option--active` : ``}`}
              tabIndex={0}
              onClick={(evt) => {
                toggleSortingList(false);
                changeSortingType(evt.target.textContent);
                sortOffers(offers);
              }}
            >
              {item}
            </li>)
          )
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
  activeSortingOption: PropTypes.string.isRequired,
  changeSortingType: PropTypes.func.isRequired,
  sortingToggleFlag: PropTypes.bool.isRequired,
  toggleSortingList: PropTypes.func.isRequired,
  sortOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  activeSortingOption: state.activeSortingOption,
  changeSortingType: state.changeSortingType,
  sortingToggleFlag: state.sortingToggleFlag,
  toggleSortingList: state.toggleSortingList,
  sortOffers: state.sortOffers
});

const mapDispatchToProps = ((dispatch) => ({
  changeSortingType(activeSortingOption) {
    dispatch(ActionCreator.changeSortingType(activeSortingOption));
  },
  toggleSortingList(sortingToggleFlag) {
    dispatch(ActionCreator.toggleSortingList(sortingToggleFlag));
  },
  sortOffers(offers) {
    dispatch(ActionCreator.sortOffers(offers));
  }
}));

export {SortingOptions};
export default connect(mapStateToProps, mapDispatchToProps)(SortingOptions);
