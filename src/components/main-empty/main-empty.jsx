import React, {memo} from "react";
import Header from "../header/header";
import CitiesList from "../cities-list/cities-list";
import {cityPropTypes} from "../../app-prop-types";

const MainEmpty = ({activeCity}) => {
  return (
    <div className="page page--gray page--main page__main--index-empty">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container cities__places-container--empty">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">
                  We could not find any property available at the moment
                  in {activeCity.name}
                </p>
              </div>
            </section>
            <div className="cities__right-section" />
          </div>
        </div>
      </main>
    </div>
  );
};

MainEmpty.propTypes = {
  activeCity: cityPropTypes,
};

export default memo(MainEmpty);
