import React, {Fragment} from "react";
import PropTypes from "prop-types";
import withReviewForm from "../../hocs/with-review-form/with-review-form";
import {ReviewFormRatings, ResponseType} from "../../constants";

const ReviewForm = ({
  offerId,
  rating,
  review,
  isFormValid,
  isFormWaitingResponse,
  reviewPostingError,
  onFormSubmit,
  onInputChange,
}) => {
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(evt) => onFormSubmit(evt, offerId)}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ReviewFormRatings.map(({mark, title}) => (
          <Fragment key={title}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={mark}
              id={title}
              type="radio"
              checked={mark === rating}
              onChange={onInputChange}
            />
            <label htmlFor={title} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={review}
        onChange={onInputChange}
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isFormValid && !isFormWaitingResponse ? `` : `disabled`}
        >
          Submit
        </button>
      </div>
      {reviewPostingError === ResponseType.ERROR && (
        <p className="reviews__error-container">
          posting review error
        </p>
      )}
    </form>
  );
};

ReviewForm.propTypes = {
  offerId: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  isFormValid: PropTypes.bool.isRequired,
  isFormWaitingResponse: PropTypes.bool.isRequired,
  reviewPostingError: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export {ReviewForm};
export default withReviewForm(ReviewForm);
