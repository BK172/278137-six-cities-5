import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {ratingToInteger} from "../../utils";

export default function OfferCard(props) {
  const {offer, onOfferCardMouseOver} = props;

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={(evt) => {
        evt.preventDefault();
        onOfferCardMouseOver(offer.offerId);
      }}
    >
      {offer.premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.offerId}`}>
          <img className="place-card__image" src={offer.image} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.cost}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${offer.favourite && `place-card__bookmark-button--active`} button`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingToInteger(offer.rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.offerId}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

OfferCard.propTypes = {
  offer: PropTypes.shape({
    offerId: PropTypes.string.isRequired,
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
  }).isRequired,
  onOfferCardMouseOver: PropTypes.func,
};
