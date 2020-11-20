import React, {Fragment, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "../header/header";
import Map from "../map/map";
import OffersList from "../offers-list/offers-list";
import ReviewList from "../review-list/review-list";
import ReviewForm from "../review-form/review-form";
import OfferBookmarkBtn from "../offer-bookmark-btn/offer-bookmark-btn";
import W3CMarkup from "../w3c-markup/w3c-markup";
import PageNotFound from "../page-not-found/page-not-found";
import {fetchOfferById, fetchOffersNearBy} from "../../store/api-actions";
import {offerOrNullPropTypes, offersOrNullPropTypes} from "../../app-prop-types";
import {getElementWidthByRating} from "../../utils";
import {OfferType, MapType, BookmarkBtnType, MAX_PHOTOS_COUNT} from "../../const";
import clsx from "clsx";

const Room = ({
  offerId,
  offersNearBy,
  currentOffer: offer,
  getOfferByIdAction,
  getOffersNearByAction,
}) => {
  useEffect(() => {
    getOfferByIdAction(offerId);
    getOffersNearByAction(offerId);
  }, [offerId]);

  if (!offerId || !offersNearBy || !offer) {
    return <PageNotFound />;
  }

  return (
    <Fragment>
      <W3CMarkup />
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.photos.slice(0, MAX_PHOTOS_COUNT).map((item) => (
                  <div key={item} className="property__image-wrapper">
                    <img className="property__image" src={item} alt="Photo studio" />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer.premium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.title}
                  </h1>
                  <OfferBookmarkBtn offer={offer} bookmarkType={BookmarkBtnType.ROOM} />
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${getElementWidthByRating(offer.rating)}%`}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {`${offer.bedrooms} Bedrooms`}
                  </li>
                  <li className="property__feature property__feature--adults">
                    {`Max ${offer.guests} adults`}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">€{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
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
                    <div
                      className={clsx(`property__avatar-wrapper user__avatar-wrapper`,
                          {'property__avatar-wrapper--pro': offer.owner.isPro})}
                    >
                      <img
                        className="property__avatar user__avatar"
                        src={offer.owner.avatar}
                        width={74}
                        height={74}
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">
                      {offer.owner.name}
                    </span>
                  </div>
                  <div className="property__description">
                    {offer.description}
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewList offerId={offerId} />
                  <ReviewForm />
                </section>
              </div>
            </div>
            <Map mapType={MapType.ROOM} offers={offersNearBy} />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <OffersList offers={offersNearBy} offerType={OfferType.ROOM} />
              </div>
            </section>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

Room.propTypes = {
  offerId: PropTypes.string.isRequired,
  offersNearBy: offersOrNullPropTypes,
  currentOffer: offerOrNullPropTypes,
  getOfferByIdAction: PropTypes.func.isRequired,
  getOffersNearByAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  offersNearBy: DATA.offersNearBy,
  currentOffer: DATA.currentOffer,
});

const mapDispatchToProps = (dispatch) => ({
  getOfferByIdAction(offerId) {
    dispatch(fetchOfferById(offerId));
  },
  getOffersNearByAction(offerId) {
    dispatch(fetchOffersNearBy(offerId));
  },
});

export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
