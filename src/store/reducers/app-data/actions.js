export const ActionType = {
  SET_CITIES: `SET_CITIES`,
  SET_OFFERS: `SET_OFFERS`,
  SET_OFFERS_NEARBY: `SET_OFFERS_NEARBY`,
  SET_OFFER_BY_ID: `SET_OFFER_BY_ID`,
  SET_FAVORITE_OFFERS: `SET_FAVORITE_OFFERS`,
  SET_REVIEWS: `SET_REVIEWS`,
  SET_OFFER_AS_FAVORITE: `SET_OFFER_AS_FAVORITE`,
};

export const setCities = (cities) => ({
  type: ActionType.SET_CITIES,
  payload: cities,
});

export const setOffers = (offers) => ({
  type: ActionType.SET_OFFERS,
  payload: offers,
});

export const setOffersNearBy = (offers) => ({
  type: ActionType.SET_OFFERS_NEARBY,
  payload: offers,
});

export const setOfferById = (currentRoomOffer) => ({
  type: ActionType.SET_OFFER_BY_ID,
  payload: currentRoomOffer,
});

export const setFavoriteOffers = (favoriteOffers) => ({
  type: ActionType.SET_FAVORITE_OFFERS,
  payload: favoriteOffers,
});

export const setReviews = (reviews) => ({
  type: ActionType.SET_REVIEWS,
  payload: reviews,
});

export const setOfferAsFavorite = (offer) => ({
  type: ActionType.SET_OFFER_AS_FAVORITE,
  payload: offer,
});
