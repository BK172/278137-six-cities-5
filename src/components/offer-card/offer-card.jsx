import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {ratingToInteger} from "utils";

export default function OfferCard(props) {
  const {offer, onOfferCardMouseover} = props;
  const {offerId, favourite, image, premium, cost, title, type, rating} = offer;

  return (
    <article 
      className="cities__place-card place-card"
      onMouseOver={(evt) => {
        evt.preventDefault();
        onOfferCardMouseover(offerId);
      }}
    >
      {premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={image} width={260} height={200} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{cost}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${favourite && `place-card__bookmark-button--active`} button`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingToInteger(rating)}%`}} />
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offerId}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape({
    offerId: PropTypes.number.isRequired,
    favourite:PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    cost: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired
};
