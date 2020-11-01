import {ActionType} from "./action";
import offers from "../mocks/offers";
import cities from "../mocks/cities";
import {extend, SortingTypes, getSortedOffers} from "../utils";

const filteredOffers = offers.filter((offer) => offer.city === cities[0].name);

const initialState = {
  offers: getSortedOffers(filteredOffers, SortingTypes[`POPULAR`]).slice(),
  activeOffer: null,
  cities,
  activeCity: cities[0],
  activeSortingOption: SortingTypes[`POPULAR`],
  sortingToggleFlag: false,
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
    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload
      });
  }

  return state;
};

export {reducer};
