import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {updateOfferFavoriteStatus} from "../../store/api-actions";
import {getAuthStatus} from "../../store/selectors";
import {offerPropTypes} from "../../app-prop-types";
import {AppRoute, AuthStatus, BookmarkBtnClasses, BookmarkBtnShapes} from "../../const";
import clsx from "clsx";

const OfferBookmarkBtn = ({offer, bookmarkType, bookmarkBtnClickAction, authStatus}) => {
  const onBookmarkBtnClick = (evt) => {
    evt.preventDefault();
    bookmarkBtnClickAction(offer.offerId, !offer.favorite);
  };

  if (authStatus === AuthStatus.NO_AUTH) {
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
        className="place-card__bookmark-icon"
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
  authStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authStatus: getAuthStatus({USER}),
});

const mapDispatchToProps = (dispatch) => ({
  bookmarkBtnClickAction(offerId, favoriteStatus) {
    dispatch(updateOfferFavoriteStatus(offerId, favoriteStatus));
  },
});

export {OfferBookmarkBtn};
export default connect(mapStateToProps, mapDispatchToProps)(OfferBookmarkBtn);
