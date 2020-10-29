export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_LIST: `GET_OFFERS_LIST`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  OPEN_SORTING_LIST: `OPEN_SORTING_LIST`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getOffersList: () => ({
    type: ActionType.GET_OFFERS_LIST
  }),
  changeSorting: (activeSortingOption) => ({
    type: ActionType.CHANGE_SORTING,
    payload: activeSortingOption
  }),
  openSortingList: (sortingOpeningFlag) => ({
    type: ActionType.OPEN_SORTING_LIST,
    payload: sortingOpeningFlag
  })
};
