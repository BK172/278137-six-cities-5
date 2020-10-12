import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import moment from "moment";
import OfferCard from "../offer-card/offer-card";
import offers from "../../mocks/offers";
import reviews from "../../mocks/reviews";
import {ratingToInteger} from "../../utils";

export default function Room(props) {
  const {offer} = props;

  return (
    <React.Fragment>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to={`/`}>
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper" />
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.photos.slice(0, 6).map((item) => (
                  <div key="item" className="property__image-wrapper">
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
                  <h2 className="reviews__title">Reviews · <span className="reviews__amount">1</span></h2>
                  <ul className="reviews__list">
                    {reviews.map((item) => (
                      <li key={item.reviewId} className="reviews__item">
                        <div className="reviews__user user">
                          <div className="reviews__avatar-wrapper user__avatar-wrapper">
                            <img className="reviews__avatar user__avatar" src={item.avatar} width={54} height={54} alt="Reviews avatar" />
                          </div>
                          <span className="reviews__user-name">
                            {item.name}
                          </span>
                        </div>
                        <div className="reviews__info">
                          <div className="reviews__rating rating">
                            <div className="reviews__stars rating__stars">
                              <span style={{width: `${ratingToInteger(item.rating)}%`}} />
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <p className="reviews__text">
                            {item.comment}
                          </p>
                          <time className="reviews__time" dateTime={item.date}>{moment(item.date, `YYYY-MM-DD`).format(`MMMM YYYY`)}</time>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <form className="reviews__form form" action="#" method="post">
                    <label className="reviews__label form__label" htmlFor="review">Your review</label>
                    <div className="reviews__rating-form form__rating">
                      <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id="5-stars" type="radio" />
                      <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                        <svg className="form__star-image" width={37} height={33}>
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars" type="radio" />
                      <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                        <svg className="form__star-image" width={37} height={33}>
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars" type="radio" />
                      <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                        <svg className="form__star-image" width={37} height={33}>
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars" type="radio" />
                      <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                        <svg className="form__star-image" width={37} height={33}>
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star" type="radio" />
                      <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                        <svg className="form__star-image" width={37} height={33}>
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                    </div>
                    <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" />
                    <div className="reviews__button-wrapper">
                      <p className="reviews__help">
                        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                      </p>
                      <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
                    </div>
                  </form>
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
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

Room.propTypes = {
  offer: PropTypes.shape({
    offerId: PropTypes.number.isRequired,
    favourite: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    cost: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
    bedrooms: PropTypes.string.isRequired,
    guests: PropTypes.string.isRequired,
    facilities: PropTypes.array.isRequired,
    owner: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      super: PropTypes.bool.isRequired
    })
  }).isRequired
};
