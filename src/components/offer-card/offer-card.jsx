import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {ratingToInteger, cardClasses, cardImgShapes} from "../../utils";
import {offerPropTypes} from "../../app-prop-types";

const OfferCard = ({offer, offerType, handleOfferCardHover = () => false}) => {
  return (
    <article
      className={`${cardClasses[offerType][`place-card`]} place-card`}
      onMouseOver={() => handleOfferCardHover(offer)}
    >
      {offer.premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${cardClasses[offerType][`place-card__image-wrapper`]} place-card__image-wrapper`}>
        <Link to={`/offer/${offer.offerId}`}>
          <img className="place-card__image" src={offer.image} width={cardImgShapes[offerType].width} height={cardImgShapes[offerType].height} alt="Place image" />
        </Link>
      </div>
      <div className= {`${cardClasses[offerType][`place-card__info`]} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.cost}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${offer.favorite && `place-card__bookmark-button--active`} button`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{offer.favorite ? `In bookmarks` : `To bookmarks`}</span>
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
};

OfferCard.propTypes = {
  offer: offerPropTypes,
  offerType: PropTypes.string.isRequired,
  handleOfferCardHover: PropTypes.func,
};

export default OfferCard;
