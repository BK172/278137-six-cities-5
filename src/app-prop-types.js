import PropTypes from "prop-types";
import moment from "moment";

export const cityPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
}).isRequired;

export const offerPropTypes = PropTypes.shape({
  offerId: PropTypes.number.isRequired,
  favorite: PropTypes.bool.isRequired,
  city: cityPropTypes,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  premium: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  guests: PropTypes.number.isRequired,
  facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
  }),
}).isRequired;

export const reviewPropTypes = PropTypes.shape({
  reviewId: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired,
  userId: PropTypes.number.isRequired,
  date(props, propName, componentName) {
    if (!moment(props[propName]).isValid()) {
      return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Validation failed.`);
    }

    return null;
  },
}).isRequired;

export const citiesPropTypes = PropTypes.arrayOf(cityPropTypes).isRequired;
export const offersPropTypes = PropTypes.arrayOf(offerPropTypes).isRequired;
export const reviewsPropTypes = PropTypes.arrayOf(reviewPropTypes).isRequired;

export const offerOrNullPropTypes = PropTypes.oneOfType([
  offerPropTypes,
  PropTypes.oneOf([null]).isRequired,
]);

export const offersOrNullPropTypes = PropTypes.oneOfType([
  PropTypes.arrayOf(offerPropTypes),
  PropTypes.oneOf([null]).isRequired,
]);

export const reviewsOrNullPropTypes = PropTypes.oneOfType([
  PropTypes.arrayOf(reviewPropTypes),
  PropTypes.oneOf([null]).isRequired,
]);
