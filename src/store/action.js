export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_LIST: `GET_OFFERS_LIST`,
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
  TOGGLE_SORTING_LIST: `TOGGLE_SORTING_LIST`,
  SORT_OFFERS: `SORT_OFFERS`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getOffersList: () => ({
    type: ActionType.GET_OFFERS_LIST
  }),
  changeSortingType: (activeSortingOption) => ({
    type: ActionType.CHANGE_SORTING_TYPE,
    payload: activeSortingOption
  }),
  toggleSortingList: (sortingToggleFlag) => ({
    type: ActionType.TOGGLE_SORTING_LIST,
    payload: sortingToggleFlag
  }),
  sortOffers: (offers) => ({
    type: ActionType.SORT_OFFERS,
    payload: offers
  })
};
