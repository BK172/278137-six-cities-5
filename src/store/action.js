export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
  SORT_OFFERS: `SORT_OFFERS`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  GET_OFFERS: `GET_OFFERS`,
  GET_CITIES: `GET_CITIES`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeSortingType: (sortingType) => ({
    type: ActionType.CHANGE_SORTING_TYPE,
    payload: sortingType
  }),
  sortOffers: (offers) => ({
    type: ActionType.SORT_OFFERS,
    payload: offers
  }),
  setActiveOffer: (activeOffer) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: activeOffer
  }),
  getOffers: (offers) => ({
    type: ActionType.GET_OFFERS,
    payload: offers
  }),
  getCities: (cities) => ({
    type: ActionType.GET_CITIES,
    payload: cities
  }),
};
