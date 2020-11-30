export const ActionType = {
  GET_CITIES: `GET_CITIES`,
  GET_OFFERS: `GET_OFFERS`,
  GET_OFFERS_NEARBY: `GET_OFFERS_NEARBY`,
  GET_OFFER_BY_ID: `GET_OFFER_BY_ID`,
  GET_FAVORITE_OFFERS: `GET_FAVORITE_OFFERS`,
  GET_REVIEWS: `GET_REVIEWS`,
  SET_OFFER_AS_FAVORITE: `SET_OFFER_AS_FAVORITE`,
};

export const getCities = (cities) => ({
  type: ActionType.GET_CITIES,
  payload: cities,
});

export const getOffers = (offers) => ({
  type: ActionType.GET_OFFERS,
  payload: offers,
});

export const getOffersNearBy = (offers) => ({
  type: ActionType.GET_OFFERS_NEARBY,
  payload: offers,
});

export const getOfferById = (currentRoomOffer) => ({
  type: ActionType.GET_OFFER_BY_ID,
  payload: currentRoomOffer,
});

export const getFavoriteOffers = (favoriteOffers) => ({
  type: ActionType.GET_FAVORITE_OFFERS,
  payload: favoriteOffers,
});

export const getReviews = (reviews) => ({
  type: ActionType.GET_REVIEWS,
  payload: reviews,
});

export const setOfferAsFavorite = (offer) => ({
  type: ActionType.SET_OFFER_AS_FAVORITE,
  payload: offer,
});
