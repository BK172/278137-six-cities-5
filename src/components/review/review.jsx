import React from "react";
import moment from "moment";
import {reviewPropTypes} from "../../app-prop-types";
import {ratingToInteger} from "../../utils";

export default function Review(props) {
  const {review} = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.avatar} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingToInteger(review.rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date}>{moment(review.date, `YYYY-MM-DD`).format(`MMMM YYYY`)}</time>
      </div>
    </li>
  );
}

Review.propTypes = {
  review: reviewPropTypes,
};
