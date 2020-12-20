import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Review from "../review/review";
import {fetchReviews} from "../../store/api-actions";
import {getReviewsSortedByDate} from "../../store/reducers/app-data/selectors";
import {MAX_REVIEWS_ON_PAGE} from "../../constants";
import {reviewsPropTypes} from "../../app-prop-types";

class ReviewsList extends PureComponent {
  componentDidMount() {
    this.props.getReviewsAction(this.props.offerId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.offerId !== this.props.offerId) {
      this.props.getReviewsAction(this.props.offerId);
    }
  }

  render() {
    const {reviews} = this.props;

    if (reviews.length) {
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
  }
}

ReviewsList.propTypes = {
  offerId: PropTypes.string.isRequired,
  reviews: reviewsPropTypes,
  getReviewsAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  reviews: getReviewsSortedByDate({DATA}),
});

const mapDispatchToProps = (dispatch) => ({
  getReviewsAction(offerId) {
    dispatch(fetchReviews(offerId));
  },
});

export {ReviewsList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
