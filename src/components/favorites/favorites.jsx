import React, {Fragment} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Header from "../header/header";
import OffersList from "../offers-list/offers-list";
import W3CMarkup from "../w3c-markup/w3c-markup";
import {offersPropTypes} from "../../app-prop-types";
import {AppRoute, OfferType} from "../../const";
import {getCitiesFromOffersList, getFavoriteOffersByCity} from "../../utils";

const Favorites = ({favoriteOffers}) => {
  return (
    <Fragment>
      <W3CMarkup />
      <div className="page">
        <Header />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {getCitiesFromOffersList(favoriteOffers).map((city) => (
                  <li key={city.name} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city.name}</span>
                        </a>
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
    </Fragment>
  );
};

Favorites.propTypes = {
  favoriteOffers: offersPropTypes,
};

const mapStateToProps = ({DATA}) => ({
  favoriteOffers: DATA.favoriteOffers,
});

export {Favorites};
export default connect(mapStateToProps)(Favorites);
