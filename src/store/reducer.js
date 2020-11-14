import {ActionType} from "./action";
import {extend, initialSortingType} from "../utils";

const initialState = {
  offers: [],
  activeOffer: null,
  cities: [],
  activeCity: {
    name: `a`,
    coordinates: [1, 1],
    zoom: 14,
  },
  sortingType: initialSortingType,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        activeCity: action.payload
      });
    case ActionType.CHANGE_SORTING_TYPE:
      return extend(state, {
        sortingType: action.payload
      });
    case ActionType.SORT_OFFERS:
      return extend(state, {
        offers: action.payload
      });
    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload
      });
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload
      });
    case ActionType.GET_CITIES:
      return extend(state, {
        cities: action.payload
      });
  }

  return state;
};

export {reducer};
