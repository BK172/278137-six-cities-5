import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";
import {postReview} from "../../store/api-actions";
import {connect} from "react-redux";
import {ReviewFormTextAreaLength, ReviewFormRatings, ResponseType} from "../../constants";

class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: ``,
      review: ``,
      isFormValid: false,
      isFormWaitingResponse: false,
      reviewPostingError: ``,
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleClearFields = this._handleClearFields.bind(this);
    this._handleChangeWaitingFlag = this._handleChangeWaitingFlag.bind(this);
    this._handleChangePostingError = this._handleChangePostingError.bind(this);
  }

  componentDidUpdate() {
    const {rating, review} = this.state;

    if (rating && review.trim().length >=
        ReviewFormTextAreaLength.MIN && review.trim().length <= ReviewFormTextAreaLength.MAX
    ) {
      this.setState({isFormValid: true});
    } else {
      this.setState({isFormValid: false});
    }
  }

  _handleSubmit(evt) {
    evt.preventDefault();

    const {offerId, postReviewAction} = this.props;
    const review = this.state.review.trim();
    const rating = this.state.rating;
    const onClearFields = this._handleClearFields;
    const onChangeWaitingFlag = this._handleChangeWaitingFlag;
    const onChangePostingError = this._handleChangePostingError;

    this._handleChangeWaitingFlag(true);
    this._handleChangePostingError(``);
    postReviewAction({
      review,
      rating,
      offerId,
      onClearFields,
      onChangeWaitingFlag,
      onChangePostingError,
    });
  }

  _handleInputChange({target}) {
    const {name, value} = target;
    this.setState({[name]: value});
  }

  _handleClearFields() {
    this.setState({
      rating: ``,
      review: ``,
    });
  }

  _handleChangeWaitingFlag(isWaitingFlag) {
    this.setState(() => ({
      isFormWaitingResponse: isWaitingFlag,
    }));
  }

  _handleChangePostingError(reviewPostingError) {
    this.setState(() => ({
      reviewPostingError,
    }));
  }

  render() {
    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this._handleSubmit}>
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
                checked={mark === this.state.rating}
                onChange={this._handleInputChange}
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
          value={this.state.review}
          onChange={this._handleInputChange}
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
            disabled={this.state.isFormValid && !this.state.isFormWaitingResponse ? `` : `disabled`}
          >
            Submit
          </button>
        </div>
        {this.state.reviewPostingError === ResponseType.ERROR && (
          <p className="reviews__error-container">
            posting review error
          </p>
        )}
      </form>
    );
  }
}

ReviewForm.propTypes = {
  offerId: PropTypes.string.isRequired,
  postReviewAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  postReviewAction(reviewData) {
    dispatch(postReview(reviewData));
  },
});

export {ReviewForm};
export default connect(undefined, mapDispatchToProps)(ReviewForm);
