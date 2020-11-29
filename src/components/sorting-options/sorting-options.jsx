import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "redux";
import withToggle from "../../hocs/with-toggle/with-toggle";
import {changeSortingType} from "../../store/reducers/app-process/actions";
import {getSortingType} from "../../store/selectors";
import {SortingTypes} from "../../constants";
import clsx from "clsx";

const SortingOptions = ({
  sortingType,
  changeSortingTypeAction,
  isToggleActive,
  onToggleChange
}) => {
  const onListItemClick = (filter) => {
    onToggleChange(false);
    changeSortingTypeAction(filter);
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
      <ul className={clsx(`places__options places__options--custom`,
          {'places__options--opened': isToggleActive})}>
        {
          Object.keys(SortingTypes).map((item) => (
            <li
              key={item}
              className={clsx(`places__option`,
                  {'places__option--active': sortingType === item})}
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
  changeSortingTypeAction: PropTypes.func.isRequired,
  isToggleActive: PropTypes.bool.isRequired,
  onToggleChange: PropTypes.func.isRequired,
};

const mapStateToProps = ({PROCESS}) => ({
  sortingType: getSortingType({PROCESS}),
  changeSortingTypeAction: PROCESS.changeSortingTypeAction,
});

const mapDispatchToProps = ((dispatch) => ({
  changeSortingTypeAction(sortingType) {
    dispatch(changeSortingType(sortingType));
  },
}));

export {SortingOptions};

const enhance = compose(
    withToggle,
    connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(SortingOptions);
