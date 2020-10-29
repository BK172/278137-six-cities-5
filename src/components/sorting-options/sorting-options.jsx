import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {SortingType} from "../../utils";

const SortingOptions = ({activeSortingOption, changeSorting, sortingOpeningFlag, openSortingList}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => openSortingList(!sortingOpeningFlag)}
      >
        {activeSortingOption}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${sortingOpeningFlag ? `places__options--opened` : ``}`}>
        {
          Object.values(SortingType).map((item) => (
            <li
              key={item}
              className={`places__option ${activeSortingOption === item ? `places__option--active` : ``}`}
              tabIndex={0}
              onClick={(evt) => {
                changeSorting(evt.target.textContent);
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
  activeSortingOption: PropTypes.string.isRequired,
  changeSorting: PropTypes.func.isRequired,
  sortingOpeningFlag: PropTypes.bool.isRequired,
  openSortingList: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeSortingOption: state.activeSortingOption,
  changeSorting: state.changeSorting,
  sortingOpeningFlag: state.sortingOpeningFlag,
  openSortingList: state.openSortingList
});

const mapDispatchToProps = ((dispatch) => ({
  changeSorting(activeSortingOption) {
    dispatch(ActionCreator.changeSorting(activeSortingOption));
  },
  openSortingList(sortingOpeningFlag) {
    dispatch(ActionCreator.openSortingList(sortingOpeningFlag));
  }
}));

export {SortingOptions};
export default connect(mapStateToProps, mapDispatchToProps)(SortingOptions);
