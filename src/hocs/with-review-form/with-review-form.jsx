import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {postReview} from "../../store/api-actions";
import {ReviewFormTextAreaLength} from "../../constants";

const withReviewForm = (Component) => {
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

      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleInputChange = this._handleInputChange.bind(this);
      this._handleClearFormFields = this._handleClearFormFields.bind(this);
      this._handleChangeFormWaitingFlag = this._handleChangeFormWaitingFlag.bind(this);
      this._handleChangeReviewPostingError = this._handleChangeReviewPostingError.bind(this);
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

    _handleFormSubmit(evt) {
      evt.preventDefault();

      const {offerId, postReviewAction} = this.props;
      const review = this.state.review.trim();
      const rating = this.state.rating;
      const onClearFormFields = this._handleClearFormFields;
      const onChangeFormWaitingFlag = this._handleChangeFormWaitingFlag;
      const onChangeReviewPostingError = this._handleChangeReviewPostingError;

      this._handleChangeFormWaitingFlag(true);
      this._handleChangeReviewPostingError(``);
      postReviewAction({
        review,
        rating,
        offerId,
        onClearFormFields,
        onChangeFormWaitingFlag,
        onChangeReviewPostingError,
      });
    }

    _handleInputChange({target}) {
      const {name, value} = target;
      this.setState({[name]: value});
    }

    _handleClearFormFields() {
      this.setState({
        rating: ``,
        review: ``,
      });
    }

    _handleChangeFormWaitingFlag(isWaitingFlag) {
      this.setState(() => ({
        isFormWaitingResponse: isWaitingFlag,
      }));
    }

    _handleChangeReviewPostingError(reviewPostingError) {
      this.setState(() => ({
        reviewPostingError,
      }));
    }

    render() {
      return (
        <Component
          {...this.props}
          rating={this.state.rating}
          review={this.state.review}
          isFormValid={this.state.isFormValid}
          isFormWaitingResponse={this.state.isFormWaitingResponse}
          reviewPostingError={this.state.reviewPostingError}
          onFormSubmit={this._handleFormSubmit}
          onInputChange={this._handleInputChange}
        />
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

  return connect(undefined, mapDispatchToProps)(ReviewForm);
};

export default withReviewForm;
