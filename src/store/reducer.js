import {ActionType} from "./action";
import {extend, initialSortingType} from "../utils";

const initialState = {
  // initialOffers: [],
  offers: [],
  activeOffer: null,
  cities: [],
  activeCity: null,
  sortingType: initialSortingType,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SORTING_TYPE:
      return extend(state, {
        sortingType: action.payload
      });
    case ActionType.SORT_OFFERS:
      return extend(state, {
        offers: action.payload
      });
    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {
        activeCity: action.payload
      });
    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload
      });
    // case ActionType.GET_INITIAL_OFFERS:
    //   return extend(state, {
    //     initialOffers: action.payload
    //   });
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
