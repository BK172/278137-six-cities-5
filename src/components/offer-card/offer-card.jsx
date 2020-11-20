import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {APIRoute, OfferClasses, OfferImgShapes} from "../../const";
import {getElementWidthByRating} from "../../utils";
import {offerPropTypes} from "../../app-prop-types";
import clsx from "clsx";

const OfferCard = ({
  offer,
  offerType,
  onOfferCardMouseOver = () => false,
  onOfferCardMouseOut = () => false
}) => {
  return (
    <article
      className={`${OfferClasses[offerType][`article`]} place-card`}
      onMouseOver={onOfferCardMouseOver}
      onMouseOut={onOfferCardMouseOut}
    >
      {offer.premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${OfferClasses[offerType][`wrapper`]} place-card__image-wrapper`}>
        <Link to={`${APIRoute.OFFERS}/${offer.offerId}`}>
          <img
            className="place-card__image"
            src={offer.image}
            width={OfferImgShapes[offerType].width}
            height={OfferImgShapes[offerType].height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${OfferClasses[offerType][`info`]} place-card__info`}>
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
          <Link to={`${APIRoute.OFFERS}/${offer.offerId}`}>{offer.title}</Link>
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
