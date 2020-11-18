import React, {Fragment, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Review from "../review/review";
import {fetchReviews} from "../../store/api-actions";
import {reviewPropTypes} from "../../app-prop-types";
import _ from "lodash";

const ReviewList = ({offerId, reviews, getReviewsAction}) => {
  useEffect(() => {
    getReviewsAction(offerId);
  }, []);

  if (reviews && !_.isEmpty(reviews)) {
    return (
      <Fragment>
        <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">{reviews.length}</span>
        </h2>
        <ul className="reviews__list">
          {reviews.map((item) => (
            <Review
              key={item.reviewId}
              review={item}
            />
          ))}
        </ul>
      </Fragment>
    );
  }

  return <div></div>;
};

ReviewList.propTypes = {
  offerId: PropTypes.string.isRequired,
  reviews: PropTypes.oneOfType([
    reviewPropTypes,
    PropTypes.oneOf([null]).isRequired,
  ]),
  getReviewsAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  reviews: DATA.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  getReviewsAction(offerId) {
    dispatch(fetchReviews(offerId));
  },
});

export {ReviewList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
