export const ActionType = {
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
  SORT_OFFERS: `SORT_OFFERS`,
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  GET_CITIES: `GET_CITIES`,
  GET_OFFERS: `GET_OFFERS`,
  GET_AUTH_INFO: `GET_AUTH_INFO`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export const changeSortingType = (sortingType) => ({
  type: ActionType.CHANGE_SORTING_TYPE,
  payload: sortingType,
});

export const sortOffers = (offers) => ({
  type: ActionType.SORT_OFFERS,
  payload: offers,
});

export const setActiveCity = (activeCity) => ({
  type: ActionType.SET_ACTIVE_CITY,
  payload: activeCity,
});

export const setActiveOffer = (activeOffer) => ({
  type: ActionType.SET_ACTIVE_OFFER,
  payload: activeOffer,
});

export const getCities = (cities) => ({
  type: ActionType.GET_CITIES,
  payload: cities,
});

export const getOffers = (offers) => ({
  type: ActionType.GET_OFFERS,
  payload: offers,
});

export const getAuthInfo = (authInfo) => ({
  type: ActionType.GET_AUTH_INFO,
  payload: authInfo,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
