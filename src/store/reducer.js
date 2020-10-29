import {ActionType} from "./action";
import offers from "../mocks/offers";
import cities from "../mocks/cities";
import {extend} from "../utils";

const initialState = {
  offers: offers.filter((offer) => offer.city === cities[0].name),
  cities,
  activeCity: cities[0],
  activeSortingOption: `Popular`,
  sortingOpeningFlag: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        activeCity: action.payload
      });
    case ActionType.GET_OFFERS_LIST:
      return extend(state, {
        offers: offers.filter((offer) => offer.city === state.activeCity.name)
      });
    case ActionType.CHANGE_SORTING:
      return extend(state, {
        activeSortingOption: action.payload,
        sortingOpeningFlag: false
      });
    case ActionType.OPEN_SORTING_LIST:
      return extend(state, {
        sortingOpeningFlag: action.payload
      });
  }

  return state;
};

export {reducer};
