import {ActionType} from "./../action";
import {initialSortingType} from "../../const";
import {extend, updateOfferInOffersById} from "../../utils";

const initialState = {
  activeOffer: null,
  activeCity: null,
  sortingType: initialSortingType,
};

const appProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SORTING_TYPE:
      return extend(state, {
        sortingType: action.payload
      });
    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {
        activeCity: action.payload
      });
    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload
      });
    case ActionType.SET_OFFER_AS_FAVORITE_IN_OFFERS:
      return extend(state, {
        offers: updateOfferInOffersById(state.offers, action.payload),
        // ???
        currentOffer: action.payload,
      });
    case ActionType.SET_OFFER_AS_FAVORITE_IN_OFFERS_NEARBY:
      return extend(state, {
        offers: updateOfferInOffersById(state.offers, action.payload),
        // ???
        currentOffer: action.payload,
      });
  }
  return state;
};

export {appProcess};
