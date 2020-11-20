import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Header from "../header/header";
import OffersList from "../offers-list/offers-list";
import {fetchFavoriteOffers} from "../../store/api-actions";
import {offersOrNullPropTypes} from "../../app-prop-types";
import {AppRoute, OfferType} from "../../const";
import {getCitiesFromOffersList, getFavoriteOffersByCity} from "../../utils";

const Favorites = ({favoriteOffers, getFavoriteOffersAction}) => {
  useEffect(() => {
    getFavoriteOffersAction();
  }, []);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteOffers && getCitiesFromOffersList(favoriteOffers).map((city) => (
                <li key={city.name} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link className="locations__item-link" to={AppRoute.MAIN}>
                        <span>{city.name}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <OffersList
                      offers={getFavoriteOffersByCity(favoriteOffers, city.name)}
                      offerType={OfferType.FAVORITE}
                    />
                  </div>
                </li>
              ))}
            </ul>
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

Favorites.propTypes = {
  favoriteOffers: offersOrNullPropTypes,
  getFavoriteOffersAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  favoriteOffers: DATA.favoriteOffers,
});

const mapDispatchToProps = (dispatch) => ({
  getFavoriteOffersAction() {
    dispatch(fetchFavoriteOffers());
  },
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
