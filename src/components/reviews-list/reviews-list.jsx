import React, {Fragment, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Review from "../review/review";
import {fetchReviews} from "../../store/api-actions";
import {getReviews} from "../../store/reducers/app-data/selectors";
import {MAX_REVIEWS_ON_PAGE} from "../../constants";
import {reviewsPropTypes} from "../../app-prop-types";
import _ from "lodash";

const ReviewsList = ({offerId, reviews, getReviewsAction}) => {
  useEffect(() => {
    getReviewsAction(offerId);
  }, [offerId]);

  if (!_.isEmpty(reviews)) {
    return (
      <Fragment>
        <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">{reviews.length}</span>
        </h2>
        <ul className="reviews__list">
          {reviews.slice(0, MAX_REVIEWS_ON_PAGE).map((item) => (
            <Review
              key={item.reviewId}
              review={item}
            />
          ))}
        </ul>
      </Fragment>
    );
  }

  return null;
};

ReviewsList.propTypes = {
  offerId: PropTypes.string.isRequired,
  reviews: reviewsPropTypes,
  getReviewsAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  reviews: getReviews({DATA}),
});

const mapDispatchToProps = (dispatch) => ({
  getReviewsAction(offerId) {
    dispatch(fetchReviews(offerId));
  },
});

export {ReviewsList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
