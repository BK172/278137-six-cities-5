import React from "react";
import {reviewPropTypes} from "../../app-prop-types";
import {getElementWidthByRating, getReviewDate} from "../../utils";

const Review = ({review}) => {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.avatar}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {review.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getElementWidthByRating(review.rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date}>
          {getReviewDate(review.date)}
        </time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: reviewPropTypes,
};

export default Review;
