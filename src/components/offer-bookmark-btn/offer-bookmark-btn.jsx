import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {updateOfferFavoriteStatus} from "../../store/api-actions";
import {redirectToRoute} from "../../store/middlewares/actions";
import {getAuthStatus} from "../../store/reducers/user/selectors";
import {offerPropTypes} from "../../app-prop-types";
import {AppRoute, AuthStatus, BookmarkBtnClasses, BookmarkBtnShapes} from "../../constants";
import clsx from "clsx";

const OfferBookmarkBtn = ({
  offer,
  authStatus,
  bookmarkType,
  bookmarkBtnClickAction,
  redirectToRouteAction,
}) => {
  const isLoggedIn = authStatus === AuthStatus.AUTH;

  const onBookmarkBtnClick = (evt) => {
    evt.preventDefault();

    if (isLoggedIn) {
      bookmarkBtnClickAction(offer.offerId, !offer.isFavorite);
    } else {
      redirectToRouteAction(AppRoute.FAVORITES);
    }
  };

  return (
    <button
      className={
        clsx(BookmarkBtnClasses[bookmarkType][`btn`],
            {[BookmarkBtnClasses[bookmarkType][`btnActive`]]: offer.isFavorite && isLoggedIn})
      }
      type="button"
      onClick={onBookmarkBtnClick}
    >
      <svg
        className={BookmarkBtnClasses[bookmarkType][`icon`]}
        width={BookmarkBtnShapes[bookmarkType][`width`]}
        height={BookmarkBtnShapes[bookmarkType][`height`]}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">
        {offer.isFavorite ? `In` : `To`} bookmarks
      </span>
    </button>
  );
};

OfferBookmarkBtn.propTypes = {
  offer: offerPropTypes,
  authStatus: PropTypes.string.isRequired,
  bookmarkType: PropTypes.string.isRequired,
  bookmarkBtnClickAction: PropTypes.func.isRequired,
  redirectToRouteAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authStatus: getAuthStatus({USER}),
});

const mapDispatchToProps = (dispatch) => ({
  bookmarkBtnClickAction(offerId, favoriteStatus) {
    dispatch(updateOfferFavoriteStatus(offerId, favoriteStatus));
  },
  redirectToRouteAction(url) {
    dispatch(redirectToRoute(url));
  },
});

export {OfferBookmarkBtn};
export default connect(mapStateToProps, mapDispatchToProps)(OfferBookmarkBtn);
