import {ActionType} from "./action";
import offers from "../mocks/offers";
import cities from "../mocks/cities";
import {extend, SortingType, getSortedOffers} from "../utils";

const filteredOffers = offers.filter((offer) => offer.city === cities[0].name);

const initialState = {
  offers: getSortedOffers(filteredOffers, SortingType[`POPULAR`]).slice(),
  cities,
  activeCity: cities[0],
  activeSortingOption: SortingType[`POPULAR`],
  sortingToggleFlag: false
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
    case ActionType.CHANGE_SORTING_TYPE:
      return extend(state, {
        activeSortingOption: action.payload
      });
    case ActionType.TOGGLE_SORTING_LIST:
      return extend(state, {
        sortingToggleFlag: action.payload
      });
    case ActionType.SORT_OFFERS:
      return extend(state, {
        offers: getSortedOffers(offers, state.activeSortingOption),
      });
  }

  return state;
};

export {reducer};
