import {ActionType} from "./action";
import offers from "../mocks/offers";
import cities from "../mocks/cities";
import {extend, getSortedOffers} from "../utils";

const filteredOffers = offers.filter((offer) => offer.city === cities[0].name);

const initialState = {
  offers: getSortedOffers(filteredOffers, `popular`).slice(),
  activeOffer: null,
  cities,
  activeCity: cities[0],
  sortingType: `popular`,
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
  }

  return state;
};

export {reducer};
