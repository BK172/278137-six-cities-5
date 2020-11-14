export const ActionType = {
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
  SORT_OFFERS: `SORT_OFFERS`,
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  GET_CITIES: `GET_CITIES`,
  GET_OFFERS: `GET_OFFERS`,
  //GET_INITIAL_OFFERS: `GET_INITIAL_OFFERS`,
};

export const ActionCreator = {
  changeSortingType: (sortingType) => ({
    type: ActionType.CHANGE_SORTING_TYPE,
    payload: sortingType
  }),
  sortOffers: (offers) => ({
    type: ActionType.SORT_OFFERS,
    payload: offers
  }),
  setActiveCity: (activeCity) => ({
    type: ActionType.SET_ACTIVE_CITY,
    payload: activeCity
  }),
  setActiveOffer: (activeOffer) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: activeOffer
  }),
  getCities: (cities) => ({
    type: ActionType.GET_CITIES,
    payload: cities
  }),
  getOffers: (offers) => ({
    type: ActionType.GET_OFFERS,
    payload: offers
  }),
  // getInitialOffers: (initalOffers) => ({
  //   type: ActionType.GET_INITIAL_OFFERS,
  //   payload: initalOffers
  // }),
};
