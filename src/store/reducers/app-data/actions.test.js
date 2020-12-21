import {
  ActionType,
  setCities,
  setOffers,
  setOffersNearBy,
  setCurrentRoomOffer,
  setFavoriteOffers,
  setOfferAsFavorite,
  setReviews,
} from "./actions";
import {
  mockCities,
  mockOffer,
  mockOffers,
  mockReviews,
} from "../../../utils";

describe(`Action creators for reducer app-data work correctly`, () => {
  test(`setCities works correctly`, () => {
    expect(setCities(mockCities)).toEqual({
      type: ActionType.SET_CITIES,
      payload: mockCities,
    });
  });

  test(`setOffers works correctly`, () => {
    expect(setOffers(mockOffers)).toEqual({
      type: ActionType.SET_OFFERS,
      payload: mockOffers,
    });
  });

  test(`setOffersNearBy works correctly`, () => {
    expect(setOffersNearBy(mockOffers)).toEqual({
      type: ActionType.SET_OFFERS_NEARBY,
      payload: mockOffers,
    });
  });

  test(`setCurrentRoomOffer works correctly`, () => {
    expect(setCurrentRoomOffer(mockOffer)).toEqual({
      type: ActionType.SET_CURRENT_ROOM_OFFER,
      payload: mockOffer,
    });
  });

  test(`setFavoriteOffers works correctly`, () => {
    expect(setFavoriteOffers(mockOffers)).toEqual({
      type: ActionType.SET_FAVORITE_OFFERS,
      payload: mockOffers,
    });
  });

  test(`setReviews works correctly`, () => {
    expect(setReviews(mockReviews)).toEqual({
      type: ActionType.SET_REVIEWS,
      payload: mockReviews,
    });
  });

  test(`setOfferAsFavorite works correctly`, () => {
    expect(setOfferAsFavorite(mockOffer)).toEqual({
      type: ActionType.SET_OFFER_AS_FAVORITE,
      payload: mockOffer,
    });
  });
});
