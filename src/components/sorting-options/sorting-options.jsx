import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "redux";
import withToggle from "../../hocs/with-toggle/with-toggle";
import {ActionCreator} from "../../store/action";
import {SortingTypes} from "../../utils";
import clsx from "clsx";

const SortingOptions = ({
  sortingType,
  changeSortingType,
  isToggleActive,
  onToggleChange
}) => {
  const onListItemClick = (filter) => {
    onToggleChange(false);
    changeSortingType(filter);
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
    </form>
  );
};

SortingOptions.propTypes = {
  sortingType: PropTypes.string.isRequired,
  changeSortingType: PropTypes.func.isRequired,
  isToggleActive: PropTypes.bool.isRequired,
  onToggleChange: PropTypes.func.isRequired,
};

const mapStateToProps = ({PROCESS}) => ({
  sortingType: PROCESS.sortingType,
  changeSortingType: PROCESS.changeSortingType,
});

const mapDispatchToProps = ((dispatch) => ({
  changeSortingType(sortingType) {
    dispatch(ActionCreator.changeSortingType(sortingType));
  },
}));

export {SortingOptions};

const enhance = compose(
    withToggle,
    connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(SortingOptions);
