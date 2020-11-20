import {ActionType} from "./../action";
import {extend} from "../../utils";

const initialState = {
  offers: [],
  offersNearBy: null,
  favoriteOffers: [],
  currentOffer: null,
  cities: [],
  authInfo: {},
  reviews: null,
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload
      });
    case ActionType.GET_OFFERS_NEARBY:
      return extend(state, {
        offersNearBy: action.payload
      });
    case ActionType.GET_OFFER_BY_ID:
      return extend(state, {
        currentOffer: action.payload
      });
    case ActionType.GET_FAVORITE_OFFERS:
      return extend(state, {
        favoriteOffers: action.payload
      });
    case ActionType.GET_OFFERS_NEARBY:
      return extend(state, {
        offersNearBy: action.payload
      });
    case ActionType.GET_CITIES:
      return extend(state, {
        cities: action.payload
      });
    case ActionType.GET_AUTH_INFO:
      return extend(state, {
        authInfo: action.payload
      });
    case ActionType.GET_REVIEWS:
      return extend(state, {
        reviews: action.payload
      });
  }
  return state;
};

export {appData};