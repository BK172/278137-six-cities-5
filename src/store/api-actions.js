import {
  setOffers,
  setOfferById,
  setOffersNearBy,
  setFavoriteOffers,
  setCities,
  setReviews,
  setOfferAsFavorite,
} from "./reducers/app-data/actions";
import {
  setActiveCity,
  isLoading,
} from "./reducers/app-process/actions";
import {
  requireAuthorization,
  setAuthInfo,
} from "./reducers/user/actions";
import {
  redirectToRoute,
} from "./middlewares/actions";
import {
  APIRoute,
  AppRoute,
  HttpCode,
  ResponseType,
  AuthStatus,
} from "../constants";
import {
  offersAdapter,
  reviewsAdapter,
  authInfoAdapter,
  getCitiesFromOffers,
} from "../utils";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = data.map((offer) => offersAdapter(offer));
      dispatch(setOffers(offers));

      const cities = getCitiesFromOffers(offers);
      dispatch(setCities(cities));
      dispatch(setActiveCity(cities[0]));

      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      return err;
    })
);

export const fetchOfferById = (offerId) => (dispatch, _getState, api) => {
  dispatch(isLoading(true));
  api.get(`${APIRoute.OFFERS}/${offerId}`)
    .then(({data}) => {
      const offer = offersAdapter(data);
      dispatch(setOfferById(offer));

      return ResponseType.SUCCESS;
    })
    .then(() => dispatch(isLoading(false)))
    .catch((err) => {
      dispatch(isLoading(false));

      return err;
    });
};

export const fetchOffersNearBy = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${offerId}${APIRoute.NEARBY}`)
    .then(({data}) => {
      const offers = data.map((offer) => offersAdapter(offer));
      dispatch(setOffersNearBy(offers));

      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      return err;
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((response) => {
      if (response.status !== HttpCode.UNAUTHORIZED) {
        const authInfo = authInfoAdapter(response.data);

        dispatch(requireAuthorization(AuthStatus.AUTH));
        dispatch(setAuthInfo(authInfo));

        return ResponseType.SUCCESS;
      } else {
        return response;
      }
    })
    .catch((err) => {
      return err;
    })
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((response) => {
      if (response.status !== HttpCode.UNAUTHORIZED) {
        const authInfo = authInfoAdapter(response.data);

        dispatch(requireAuthorization(AuthStatus.AUTH));
        dispatch(setAuthInfo(authInfo));

        return ResponseType.SUCCESS;
      } else {
        return response;
      }
    })
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .catch((err) => {
      return err;
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGOUT)
    .finally(() => {
      dispatch(requireAuthorization(AuthStatus.NO_AUTH));
      dispatch(setAuthInfo(null));
      dispatch(redirectToRoute(AppRoute.MAIN));
    })
);

export const fetchReviews = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${offerId}`)
    .then(({data}) => {
      const reviews = data.map((review) => reviewsAdapter(review));
      dispatch(setReviews(reviews));

      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      return err;
    })
);

export const postReview = ({review: comment, rating, offerId,
  onClearFormFields, onChangeFormWaitingFlag, onChangeReviewPostingError}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${offerId}`, {comment, rating})
    .then(({data}) => {
      const reviews = data.map((review) => reviewsAdapter(review));
      dispatch(setReviews(reviews));

      onChangeFormWaitingFlag(false);
      onClearFormFields();

      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      onChangeFormWaitingFlag(false);
      onChangeReviewPostingError(ResponseType.ERROR);

      return err;
    })
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then((response) => {
      if (response.status !== HttpCode.UNAUTHORIZED) {
        const offers = response.data.map((offer) => offersAdapter(offer));
        dispatch(setFavoriteOffers(offers));

        return ResponseType.SUCCESS;
      } else {
        return response;
      }
    })
    .catch((err) => {
      return err;
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
      return err;
    })
);
