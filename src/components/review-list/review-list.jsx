import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Review from "../review/review";
import {reviewPropTypes} from "../../app-prop-types";

const ReviewList = ({reviews}) => {
  return (
    <Fragment>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
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
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
};

export default ReviewList;
