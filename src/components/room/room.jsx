import React, {PureComponent, Fragment, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "../header/header";
import OffersList from "../offers-list/offers-list";
import ReviewList from "../review-list/review-list";
import ReviewForm from "../review-form/review-form";
import Map from "../map/map";
import PageNotFound from "../page-not-found/page-not-found";
import {fetchOfferById, fetchOffersNearBy, fetchReviews} from "../../store/api-actions";
import {offerPropTypes, reviewPropTypes} from "../../app-prop-types";
import {getElementWidthByRating} from "../../utils";
import clsx from "clsx";

// class Room extends PureComponent {
//   componentDidMount() {
//     const {
//       offerId,
//       getOfferByIdAction,
//       getOffersNearByAction,
//       getReviewsAction
//     } = this.props;
//     // const {currentOffer, offersNearBy, reviews} = this.props;

//     getOfferByIdAction(offerId);
//     getOffersNearByAction(offerId);
//     getReviewsAction(offerId);

    // Promise.all([
    //   getOfferByIdAction(offerId),
    //   getOffersNearByAction(offerId),
    //   getReviewsAction(offerId),
    // ]).then(() => {
    //   console.log(`c`,offersNearBy);
    //   console.log(`c`,currentOffer);
    //   console.log(`c`,reviews);
    // });
  // }

  // render() {

const Room = ({
  offerId,
  getOfferByIdAction,
  getOffersNearByAction,
  getReviewsAction,
  offersNearBy,
  currentOffer: offer,
  reviews,
}) => {

  useEffect(() => {
    (async () => {
      await getReviewsAction(offerId);
      await getOfferByIdAction(offerId);
      await getOffersNearByAction(offerId);
    })();
  }, []);

    console.log(`r`,offersNearBy);
    console.log(`r`,offer);
    console.log(`r`,reviews);

    if (!offerId || !offersNearBy || !offer || !reviews) {
      return <PageNotFound />;
    }

    return (
      <Fragment>
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
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
                  )}
                  <div className="property__name-wrapper">
                    <h1 className="property__name">
                      {offer.title}
                    </h1>
                    <button className={clsx(`property__bookmark-button button`, {'property__bookmark-button--active': offer.favorite})} type="button">
                      <svg className="property__bookmark-icon" width={31} height={33}>
                        <use xlinkHref="#icon-bookmark" />
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
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
                      <div className={clsx(`property__avatar-wrapper user__avatar-wrapper`, {'property__avatar-wrapper--pro': offer.owner.isPro})}>
                        <img className="property__avatar user__avatar" src={offer.owner.avatar} width={74} height={74} alt="Host avatar" />
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
                    <ReviewList reviews={reviews} />
                    <ReviewForm />
                  </section>
                </div>
              </div>
              <Map mapType={`property`} offers={offersNearBy} />
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  <OffersList offers={offersNearBy} />
                </div>
              </section>
            </div>
          </main>
        </div>
      </Fragment>
    );
  }
// }

Room.propTypes = {
  offerId: PropTypes.string.isRequired,
  offersNearBy: PropTypes.oneOfType([
    PropTypes.arrayOf(offerPropTypes),
    PropTypes.oneOf([null]).isRequired,
  ]),
  currentOffer: PropTypes.oneOfType([
    offerPropTypes,
    PropTypes.oneOf([null]).isRequired,
  ]),
  reviews: PropTypes.oneOfType([
    reviewPropTypes,
    PropTypes.oneOf([null]).isRequired,
  ]),
  getOfferByIdAction: PropTypes.func.isRequired,
  getOffersNearByAction: PropTypes.func.isRequired,
  getReviewsAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  offersNearBy: DATA.offersNearBy,
  currentOffer: DATA.currentOffer,
  reviews: DATA.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  getOfferByIdAction(offerId) {
    dispatch(fetchOfferById(offerId));
  },
  getOffersNearByAction(offerId) {
    dispatch(fetchOffersNearBy(offerId));
  },
  getReviewsAction(offerId) {
    dispatch(fetchReviews(offerId));
  },
});

export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
