import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {getElementWidthByRating} from "../../utils";
import {offerPropTypes} from "../../app-prop-types";
import clsx from "clsx";

const OfferCard = ({
  offer,
  offerType,
  onOfferCardMouseOver = () => false,
  onOfferCardMouseOut = () => false
}) => {
  const cardClasses = {
    main: {
      article: `cities__place-card`,
      wrapper: `cities__image-wrapper`
    },
    room: {
      article: `near-places__card`,
      wrapper: `near-places__image-wrapper`
    },
    favorite: {
      article: `favorites__card`,
      wrapper: `favorites__image-wrapper`,
      info: `favorites__card-info`
    }
  };

  const cardImgShapes = {
    main: {
      width: 260,
      height: 200
    },
    room: {
      width: 260,
      height: 200
    },
    favorite: {
      width: 150,
      height: 110
    }
  };

  return (
    <article
      className={`${cardClasses[offerType][`article`]} place-card`}
      onMouseOver={onOfferCardMouseOver}
      onMouseOut={onOfferCardMouseOut}
    >
      {offer.premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${cardClasses[offerType][`wrapper`]} place-card__image-wrapper`}>
        <Link to={`/offer/${offer.offerId}`}>
          <img
            className="place-card__image"
            src={offer.image}
            width={cardImgShapes[offerType].width}
            height={cardImgShapes[offerType].height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${cardClasses[offerType][`info`]} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={clsx(`place-card__bookmark-button button`, {'place-card__bookmark-button--active': offer.favorite})}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{offer.favorite ? `In bookmarks` : `To bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getElementWidthByRating(offer.rating)}%`}} />
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
  onOfferCardMouseOver: PropTypes.func,
  onOfferCardMouseOut: PropTypes.func,
};

export default OfferCard;
