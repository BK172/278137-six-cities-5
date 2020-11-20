import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchFavoriteOffers, updateOfferFavoriteStatus} from "../../store/api-actions";
import {offerPropTypes} from "../../app-prop-types";
import {AppRoute, AuthorizationStatus, BookmarkBtnClasses, BookmarkBtnShapes} from "../../const";
import clsx from "clsx";

const OfferBookmarkBtn = ({offer, bookmarkType, bookmarkBtnClickAction, authorizationStatus}) => {
  const onBookmarkBtnClick = (evt) => {
    evt.preventDefault();
    bookmarkBtnClickAction(offer.offerId, !offer.favorite);
  };

  if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
    return (
      <button
        className={
          clsx(BookmarkBtnClasses[bookmarkType][`btn`],
              {[BookmarkBtnClasses[bookmarkType][`btnActive`]]: offer.favorite})
        }
        type="button"
      >
        <Link to={AppRoute.LOGIN}>
          <svg
            className={BookmarkBtnClasses[bookmarkType][`img`]}
            width={BookmarkBtnShapes[bookmarkType][`width`]}
            height={BookmarkBtnShapes[bookmarkType][`height`]}
          >
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">{offer.favorite ? `In` : `To`} bookmarks</span>
        </Link>
      </button>
    );
  }

  return (
    <button
      className={
        clsx(BookmarkBtnClasses[bookmarkType][`btn`],
            {[BookmarkBtnClasses[bookmarkType][`btnActive`]]: offer.favorite})
      }
      type="button"
      onClick={onBookmarkBtnClick}
    >
      <svg
        className={BookmarkBtnClasses[bookmarkType][`img`]}
        width={BookmarkBtnShapes[bookmarkType][`width`]}
        height={BookmarkBtnShapes[bookmarkType][`height`]}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{offer.favorite ? `In` : `To`} bookmarks</span>
    </button>
  );
};

OfferBookmarkBtn.propTypes = {
  offer: offerPropTypes,
  bookmarkType: PropTypes.string.isRequired,
  bookmarkBtnClickAction: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  bookmarkBtnClickAction(offerId, favoriteStatus) {
    dispatch(updateOfferFavoriteStatus(offerId, favoriteStatus));
    dispatch(fetchFavoriteOffers());
  },
});

export {OfferBookmarkBtn};
export default connect(mapStateToProps, mapDispatchToProps)(OfferBookmarkBtn);
