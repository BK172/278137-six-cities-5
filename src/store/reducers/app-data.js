import {ActionType} from "./../action";
import {getCities} from "./../selectors";
import {extend, updateOfferInOffersById} from "../../utils";

const initialState = {
  offers: [],
  offersNearBy: [],
  favoriteOffers: [],
  currentOffer: {},
  currentRoomOffer: null,
  cities: [],
  authInfo: {},
  reviews: [],
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload
      });
    case ActionType.SET_CURRENT_OFFER:
      return extend(state, {
        currentOffer: action.payload
      });
    case ActionType.GET_OFFERS_NEARBY:
      return extend(state, {
        offersNearBy: action.payload
      });
    case ActionType.GET_OFFER_BY_ID:
      return extend(state, {
        currentRoomOffer: action.payload
      });
    case ActionType.GET_FAVORITE_OFFERS:
      return extend(state, {
        favoriteOffers: action.payload
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
    case ActionType.SET_OFFER_AS_FAVORITE:
      return extend(state, {
        offers: updateOfferInOffersById(state.offers, action.payload),
        offersNearBy: updateOfferInOffersById(state.offersNearBy, action.payload),
        favoriteOffers: updateOfferInOffersById(state.favoriteOffers, action.payload),
      });
  }
  return state;
};

export {appData};
