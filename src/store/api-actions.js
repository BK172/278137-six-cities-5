import {
  getOffers,
  getOfferById,
  getOffersNearBy,
  getFavoriteOffers,
  getCities,
  getAuthInfo,
  getReviews,
  setActiveCity,
  setOfferAsFavorite,
  requireAuthorization,
  redirectToRoute,
  isLoading
} from "./action";
import {
  APIRoute,
  AppRoute,
  HttpCode,
  ResponseType,
  AuthStatus
} from "../const";
import {
  offersAdapter,
  reviewsAdapter,
  getCitiesFromOffers
} from "../utils";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = data.map((offer) => offersAdapter(offer));
      dispatch(getOffers(offers));

      const cities = getCitiesFromOffers(offers);
      dispatch(getCities(cities));
      dispatch(setActiveCity(cities[0]));

      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      throw err;
    })
);

export const fetchOfferById = (offerId) => (dispatch, _getState, api) => {
  dispatch(isLoading(true));
  api.get(`${APIRoute.OFFERS}/${offerId}`)
    .then(({data}) => {
      const offer = offersAdapter(data);
      dispatch(getOfferById(offer));

      return ResponseType.SUCCESS;
    })
    .then(() => dispatch(isLoading(false)))
    .catch((err) => {
      dispatch(isLoading(false));

      throw err;
    });
};

export const fetchOffersNearBy = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${offerId}/nearby`)
    .then(({data}) => {
      const offers = data.map((offer) => offersAdapter(offer));
      dispatch(getOffersNearBy(offers));

      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      throw err;
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((response) => {
      if (response.status !== HttpCode.UNAUTHORIZED) {
        dispatch(requireAuthorization(AuthStatus.AUTH));
        dispatch(getAuthInfo(response.data));

        return ResponseType.SUCCESS;
      } else {
        return response;
      }
    })
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((response) => {
      if (response.status !== HttpCode.UNAUTHORIZED) {
        dispatch(requireAuthorization(AuthStatus.AUTH));
        dispatch(getAuthInfo(response.data));

        return ResponseType.SUCCESS;
      } else {
        return response;
      }
    })
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .catch((err) => {
      throw err;
    })
);

export const fetchReviews = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${offerId}`)
    .then(({data}) => {
      const reviews = data.map((review) => reviewsAdapter(review));
      dispatch(getReviews(reviews));

      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      throw err;
    })
);

export const postReview = ({review: comment, rating, offerId,
  onClearFormFields, onChangeFormResponseStatus}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${offerId}`, {comment, rating})
    .then(({data}) => {
      const reviews = data.map((review) => reviewsAdapter(review));
      dispatch(getReviews(reviews));

      onChangeFormResponseStatus(false);
      onClearFormFields();

      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      throw err;
    })
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then((response) => {
      if (response.status !== HttpCode.UNAUTHORIZED) {
        const offers = response.data.map((offer) => offersAdapter(offer));
        dispatch(getFavoriteOffers(offers));

        return ResponseType.SUCCESS;
      } else {
        return response;
      }
    })
    .catch((err) => {
      throw err;
    })
);

export const updateOfferFavoriteStatus = (offerId, isFavorite) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${offerId}/${isFavorite ? 1 : 0}`)
    .then(({data}) => {
      const offer = offersAdapter(data);
      dispatch(setOfferAsFavorite(offer));

      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      throw err;
    })
);
