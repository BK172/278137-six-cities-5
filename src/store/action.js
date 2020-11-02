export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
  SORT_OFFERS: `SORT_OFFERS`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeSortingType: (activeSortingOption) => ({
    type: ActionType.CHANGE_SORTING_TYPE,
    payload: activeSortingOption
  }),
  sortOffers: (offers) => ({
    type: ActionType.SORT_OFFERS,
    payload: offers
  }),
  setActiveOffer: (activeOffer) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: activeOffer
  }),
};
