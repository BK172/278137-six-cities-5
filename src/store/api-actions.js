import {
  getOffers,
  getOfferById,
  getOffersNearBy,
  getCities,
  setActiveCity,
  requireAuthorization,
  getAuthInfo,
  redirectToRoute
} from "./action";
import {
  APIRoute,
  AppRoute,
  AuthorizationStatus,
  getCitiesFromOffersList,
  orderCitiesByList,
  offersAdapter,
  citiesAdapter,
  ResponseType,
  HttpCode
} from "../utils";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = data.map((offer) => offersAdapter(offer));
      dispatch(getOffers(offers));

      const cities = getCitiesFromOffersList(data).map((city) => citiesAdapter(city));
      const orderedCities = orderCitiesByList(cities);
      dispatch(getCities(orderedCities));
      dispatch(setActiveCity(orderedCities[0]));

      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      throw err;
    })
);

export const fetchOfferById = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${offerId}`)
    .then(({data}) => {
      const offer = offersAdapter(data);
      dispatch(getOfferById(offer));

      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      throw err;
    })
);

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
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
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
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
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
