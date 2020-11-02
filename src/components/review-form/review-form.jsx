import React from "react";
import PropTypes from "prop-types";
import withReviewForm from "../../hocs/with-review-form/with-review-form";

const ReviewForm = ({onFormSubmit, onInputChange}) => {
  const ratingMark = [`5`, `4`, `3`, `2`, `1`];
  const ratingTtitle = [`perfect`, `good`, `not bad`, `badly`, `terribly`];

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingMark.map((item, i) => (
          <React.Fragment key={item}>
            <input className="form__rating-input visually-hidden" name="rating" defaultValue={item} id={`${item}-stars`} type="radio"
              onChange={onInputChange}
            />
            <label htmlFor={`${item}-stars`} className="reviews__rating-label form__rating-label" title={ratingTtitle[i]}>
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default withReviewForm(ReviewForm);
