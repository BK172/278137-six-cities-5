import React, {Fragment, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Header from "../../header/header";
import OffersList from "../../offers-list/offers-list";
import {fetchFavoriteOffers} from "../../../store/api-actions";
import {getFavoriteOffersMapByCity} from "../../../store/selectors";
import {AppRoute, OfferType} from "../../../const";

const PageFavorites = ({favoriteOffersMapByCity, getFavoriteOffersAction}) => {
  useEffect(() => {
    getFavoriteOffersAction();
  }, []);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            {favoriteOffersMapByCity.size ? (
              <Fragment>
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {Array.from(favoriteOffersMapByCity.keys()).map((cityName) =>
                    <li key={cityName} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <Link className="locations__item-link" to={AppRoute.MAIN}>
                            <span>{cityName}</span>
                          </Link>
                        </div>
                      </div>
                      <div className="favorites__places">
                        <OffersList
                          offerType={OfferType.FAVORITE}
                          offers={favoriteOffersMapByCity.get(cityName)}
                        />
                      </div>
                    </li>
                  )}
                </ul>
              </Fragment>
            ) : (
              <Fragment>
                <h1 className="visually-hidden">FavoritesPage (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">
                    Save properties to narrow down search or plan yor future trips.
                  </p>
                </div>
              </Fragment>
            )}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.MAIN}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
        </Link>
      </footer>
    </div>
  );
};

PageFavorites.propTypes = {
  favoriteOffersMapByCity: PropTypes.instanceOf(Map).isRequired,
  getFavoriteOffersAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  favoriteOffersMapByCity: getFavoriteOffersMapByCity({DATA}),
});

const mapDispatchToProps = (dispatch) => ({
  getFavoriteOffersAction() {
    dispatch(fetchFavoriteOffers());
  },
});

export {PageFavorites};
export default connect(mapStateToProps, mapDispatchToProps)(PageFavorites);
