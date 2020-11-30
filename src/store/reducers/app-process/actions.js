export const ActionType = {
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  IS_LOADING: `IS_LOADING`,
};

export const changeSortingType = (sortingType) => ({
  type: ActionType.CHANGE_SORTING_TYPE,
  payload: sortingType,
});

export const setActiveCity = (activeCity) => ({
  type: ActionType.SET_ACTIVE_CITY,
  payload: activeCity,
});

export const setActiveOffer = (activeOffer) => ({
  type: ActionType.SET_ACTIVE_OFFER,
  payload: activeOffer,
});

export const isLoading = (isLoadingFlag) => ({
  type: ActionType.IS_LOADING,
  payload: isLoadingFlag,
});
