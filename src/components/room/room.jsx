import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import OfferCard from "../offer-card/offer-card";
import ReviewList from "../review-list/review-list";
import ReviewForm from "../review-form/review-form";
import {ratingToInteger} from "../../utils";
import {offerPropTypes, reviewPropTypes} from "../../app-prop-types";

const Room = ({offer, offers, reviews}) => {
  return (
    <React.Fragment>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.photos.slice(0, 6).map((item) => (
                  <div key={item} className="property__image-wrapper">
                    <img className="property__image" src={item} alt="Photo studio" />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer.premium && (
                  <div className="place-card__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.title}
                  </h1>
                  <button className={`place-card__bookmark-button ${offer.favourite && `place-card__bookmark-button--active`} button`} type="button">
                    <svg className="property__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${ratingToInteger(offer.rating)}%`}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedrooms}
                  </li>
                  <li className="property__feature property__feature--adults">
                    {offer.guests}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">€{offer.cost}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What`&apos;`s inside</h2>
                  <ul className="property__inside-list">
                    {offer.facilities.map((item) => (
                      <li key={item} className="property__inside-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${offer.owner.super && `property__avatar-wrapper--pro`} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={offer.owner.avatar} width={74} height={74} alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {offer.owner.name}
                    </span>
                  </div>
                  <div className="property__description">
                    {offer.description.map((item) => (
                      <p key={item} className="property__text">{item}</p>
                    ))}
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewList reviews={reviews} />
                  <ReviewForm />
                </section>
              </div>
            </div>
            <section className="property__map map" />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {offers.slice(0, 3).map((item) => (
                  <OfferCard
                    key={item.offerId}
                    offer={item}
                    offerType={`room`}
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

Room.propTypes = {
  offer: offerPropTypes,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
};

export default Room;
