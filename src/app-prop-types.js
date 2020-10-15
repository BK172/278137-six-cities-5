import PropTypes from "prop-types";
import moment from "moment";

export const offerPropTypes = PropTypes.shape({
  offerId: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  premium: PropTypes.bool.isRequired,
  cost: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  bedrooms: PropTypes.string.isRequired,
  guests: PropTypes.string.isRequired,
  facilities: PropTypes.array.isRequired,
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    super: PropTypes.bool.isRequired
  })
}).isRequired;

export const reviewPropTypes = PropTypes.shape({
  reviewId: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date(props, propName, componentName) {
    if (!moment(props[propName], `YYYY-MM-DD`, true).isValid()) {
      return new Error(
          `Invalid prop \`` + propName + `\` supplied to` +
          ` \`` + componentName + `\`. Validation failed.`
      );
    }
    return null;
  },
}).isRequired;
