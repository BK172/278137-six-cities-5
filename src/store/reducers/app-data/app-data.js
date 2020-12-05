import {ActionType} from "./actions";
import {extend, updateOfferById, removeOfferById} from "../../../utils";

const initialState = {
  offers: [],
  offersNearBy: [],
  favoriteOffers: [],
  currentRoomOffer: null,
  cities: [],
  reviews: [],
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_OFFERS:
      return extend(state, {
        offers: action.payload
      });
    case ActionType.SET_OFFERS_NEARBY:
      return extend(state, {
        offersNearBy: action.payload
      });
    case ActionType.SET_OFFER_BY_ID:
      return extend(state, {
        currentRoomOffer: action.payload
      });
    case ActionType.SET_FAVORITE_OFFERS:
      return extend(state, {
        favoriteOffers: action.payload
      });
    case ActionType.SET_CITIES:
      return extend(state, {
        cities: action.payload
      });
    case ActionType.SET_REVIEWS:
      return extend(state, {
        reviews: action.payload
      });
    case ActionType.SET_OFFER_AS_FAVORITE:
      return extend(state, {
        offers: updateOfferById(action.payload, state.offers),
        offersNearBy: state.currentRoomOffer && (
          state.currentRoomOffer.offerId !== action.payload.offerId) ?
          updateOfferById(action.payload, state.offersNearBy) : state.offersNearBy,
        favoriteOffers: action.payload.isFavorite ?
          updateOfferById(action.payload, state.offers) : removeOfferById(action.payload, state.favoriteOffers),
        currentRoomOffer: state.currentRoomOffer && (
          state.currentRoomOffer.offerId === action.payload.offerId) ?
          action.payload : state.currentRoomOffer,
      });
  }
  return state;
};

export {appData};
