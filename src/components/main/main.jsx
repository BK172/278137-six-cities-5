import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "../header/header";
import MainEmpty from "../main-empty/main-empty";
import OfferList from "../offer-list/offer-list";
import CitiesList from "../cities-list/cities-list";
import SortingOptions from "../sorting-options/sorting-options";
import Map from "../map/map";
import {offerPropTypes, citiesPropTypes} from "../../app-prop-types";
import clsx from "clsx";

class Main extends PureComponent {
  render() {
    const {offers, activeCity} = this.props;

    return (
      <Fragment>
        <div style={{display: `none`}}>
          <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
        </div>
        <div className={`page page--gray page--main ${clsx(offers.length === 0 && `page__main--index-empty`)}`}>
          <Header />
          <main className="page__main page__main--index">
            <h1 className="visually-hidden">Cities</h1>
            <div className="tabs">
              <section className="locations container">
                <CitiesList />
              </section>
            </div>
            <div className="cities">
              <div className={`cities__places-container container ${clsx(offers.length === 0 && `cities__places-container--empty`)}`}>
                {offers.length > 0 ? (
                  <Fragment>
                    <section className="cities__places places">
                      <h2 className="visually-hidden">Places</h2>
                      <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
                      <SortingOptions />
                      <div className="cities__places-list places__list tabs__content">
                        <OfferList offers={offers} />
                      </div>
                    </section>
                    <div className="cities__right-section">
                      <Map mapType={`cities`} offers={offers} />
                    </div>
                  </Fragment>
                ) : (
                  <MainEmpty activeCity={activeCity} />
                )}
              </div>
            </div>
          </main>
        </div>
      </Fragment>
    );
  }
}

Main.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  activeCity: citiesPropTypes,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  activeCity: state.activeCity,
});

export {Main};
export default connect(mapStateToProps)(Main);
