import React, {Fragment, memo} from "react";
import {citiesPropTypes} from "../../app-prop-types";

const MainEmpty = ({activeCity}) => {
  return (
    <Fragment>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment
            in {activeCity.name}</p>
        </div>
      </section>
      <div className="cities__right-section"/>
    </Fragment>
  );
};

MainEmpty.propTypes = {
  activeCity: citiesPropTypes,
};

export default memo(MainEmpty);
