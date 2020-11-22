import React, {PureComponent} from "react";
import {connect} from "react-redux";
import Header from "../../header/header";
import PageMainEmpty from "../page-main-empty/page-main-empty";
import OffersList from "../../offers-list/offers-list";
import CitiesList from "../../cities-list/cities-list";
import SortingOptions from "../../sorting-options/sorting-options";
import Map from "../../map/map";
import {getSortedOffersByPrice, getActiveCity} from "../../../store/selectors";
import {offersPropTypes, cityPropTypes} from "../../../app-prop-types";
import {OfferType, MapType} from "../../../const";
import _ from "lodash";

class PageMain extends PureComponent {
  render() {
    const {offers, activeCity} = this.props;

    if (_.isEmpty(offers)) {
      return <PageMainEmpty activeCity={activeCity} />;
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
                  <OffersList offerType={OfferType.MAIN} offers={offers} />
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

PageMain.propTypes = {
  offers: offersPropTypes,
  activeCity: cityPropTypes,
};

const mapStateToProps = ({DATA, PROCESS}) => ({
  offers: getSortedOffersByPrice({DATA, PROCESS}),
  activeCity: getActiveCity({PROCESS}),
});

export {PageMain};
export default connect(mapStateToProps)(PageMain);
