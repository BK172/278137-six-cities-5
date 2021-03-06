import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import clsx from "clsx";
import _ from "lodash";
import Header from "../../header/header";
import Map from "../../map/map";
import OffersList from "../../offers-list/offers-list";
import ReviewsList from "../../reviews-list/reviews-list";
import ReviewForm from "../../review-form/review-form";
import OfferBookmarkBtn from "../../offer-bookmark-btn/offer-bookmark-btn";
import PageLoading from "../page-loading/page-loading";
import PageNotFound from "../page-not-found/page-not-found";
import {fetchOfferById, fetchOffersNearBy} from "../../../store/api-actions";
import {setCurrentRoomOffer} from "../../../store/reducers/app-data/actions";
import {getOffersNearBy, getCurrentRoomOffer} from "../../../store/reducers/app-data/selectors";
import {getIsLoadingFlag} from "../../../store/reducers/app-process/selectors";
import {getAuthStatus} from "../../../store/reducers/user/selectors";
import {offerOrNullPropTypes, offersPropTypes} from "../../../app-prop-types";
import {OfferType, MapType, BookmarkBtnType, AuthStatus, MAX_PHOTOS_COUNT} from "../../../constants";
import {getElementWidthByRating} from "../../../utils";

class PageRoom extends PureComponent {
  componentDidMount() {
    const {offerId, getOfferByIdAction, getOffersNearByAction} = this.props;

    getOfferByIdAction(offerId);
    getOffersNearByAction(offerId);
  }

  componentDidUpdate(prevProps) {
    const {offerId, getOfferByIdAction, getOffersNearByAction} = this.props;

    if (prevProps.offerId !== offerId) {
      getOfferByIdAction(offerId);
      getOffersNearByAction(offerId);
    }
  }

  componentWillUnmount() {
    this.props.updateCurrentOfferAction();
  }

  render() {
    const {
      offerId,
      offersNearBy,
      currentRoomOffer: offer,
      isLoadingFlag,
      authStatus
    } = this.props;

    const isLoggedIn = authStatus === AuthStatus.AUTH;

    if (!offerId || _.isEmpty(offer) && !isLoadingFlag) {
      return <PageNotFound />;
    } else if (isLoadingFlag) {
      return <PageLoading />;
    }

    return (
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
                {offer.isPremium && (
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
                  <ReviewsList offerId={offerId} />
                  {isLoggedIn && <ReviewForm offerId={offerId} />}
                </section>
              </div>
            </div>
            {offersNearBy.length && (
              <Map mapType={MapType.ROOM} offers={offersNearBy} currentOffer={offer} />
            )}
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {offersNearBy.length && (
                  <OffersList
                    offerType={OfferType.ROOM}
                    offers={offersNearBy}
                    selectedOfferId={-1}
                  />
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

PageRoom.propTypes = {
  offerId: PropTypes.string.isRequired,
  offersNearBy: offersPropTypes,
  currentRoomOffer: offerOrNullPropTypes,
  getOfferByIdAction: PropTypes.func.isRequired,
  getOffersNearByAction: PropTypes.func.isRequired,
  updateCurrentOfferAction: PropTypes.func.isRequired,
  authStatus: PropTypes.string.isRequired,
  isLoadingFlag: PropTypes.bool.isRequired,
};

const mapStateToProps = ({DATA, PROCESS, USER}) => ({
  offersNearBy: getOffersNearBy({DATA}),
  currentRoomOffer: getCurrentRoomOffer({DATA}),
  authStatus: getAuthStatus({USER}),
  isLoadingFlag: getIsLoadingFlag({PROCESS}),
});

const mapDispatchToProps = (dispatch) => ({
  getOfferByIdAction(offerId) {
    dispatch(fetchOfferById(offerId));
  },
  getOffersNearByAction(offerId) {
    dispatch(fetchOffersNearBy(offerId));
  },
  updateCurrentOfferAction() {
    dispatch(setCurrentRoomOffer(null));
  },
});

export {PageRoom};
export default connect(mapStateToProps, mapDispatchToProps)(PageRoom);
