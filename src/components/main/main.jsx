import React, {PureComponent} from "react";
import {connect} from "react-redux";
import Header from "../header/header";
import MainEmpty from "../main-empty/main-empty";
import OffersList from "../offers-list/offers-list";
import CitiesList from "../cities-list/cities-list";
import SortingOptions from "../sorting-options/sorting-options";
import Map from "../map/map";
import {getSortedOffersByPrice} from "../../store/selectors";
import {offersPropTypes, cityPropTypes} from "../../app-prop-types";
import {OfferType, MapType} from "../../const";

class Main extends PureComponent {
  render() {
    const {offers, activeCity} = this.props;

    if (!offers.length) {
      return <MainEmpty activeCity={activeCity} />;
    }

    return (
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList />
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
                <SortingOptions />
                <div className="cities__places-list places__list tabs__content">
                  <OffersList offers={offers} offerType={OfferType.MAIN} />
                </div>
              </section>
              <div className="cities__right-section">
                <Map mapType={MapType.MAIN} offers={offers} />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  offers: offersPropTypes,
  activeCity: cityPropTypes,
};

const mapStateToProps = ({DATA, PROCESS}) => ({
  offers: getSortedOffersByPrice({DATA, PROCESS}),
  activeCity: PROCESS.activeCity,
});

export {Main};
export default connect(mapStateToProps)(Main);
