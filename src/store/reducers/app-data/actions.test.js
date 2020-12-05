import {
  ActionType,
  setCities,
  setOffers,
  setOffersNearBy,
  setOfferById,
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

describe(`Should action creators for reducer app-data work correctly`, () => {
  it(`Should setCities works correctly`, () => {
    expect(setCities(mockCities)).toEqual({
      type: ActionType.SET_CITIES,
      payload: mockCities,
    });
  });

  it(`Should setOffers works correctly`, () => {
    expect(setOffers(mockOffers)).toEqual({
      type: ActionType.SET_OFFERS,
      payload: mockOffers,
    });
  });

  it(`Should setOffersNearBy works correctly`, () => {
    expect(setOffersNearBy(mockOffers)).toEqual({
      type: ActionType.SET_OFFERS_NEARBY,
      payload: mockOffers,
    });
  });

  it(`Should setOfferById works correctly`, () => {
    expect(setOfferById(mockOffer)).toEqual({
      type: ActionType.SET_OFFER_BY_ID,
      payload: mockOffer,
    });
  });

  it(`Should setFavoriteOffers works correctly`, () => {
    expect(setFavoriteOffers(mockOffers)).toEqual({
      type: ActionType.SET_FAVORITE_OFFERS,
      payload: mockOffers,
    });
  });

  it(`Should setReviews works correctly`, () => {
    expect(setReviews(mockReviews)).toEqual({
      type: ActionType.SET_REVIEWS,
      payload: mockReviews,
    });
  });

  it(`Should setOfferAsFavorite works correctly`, () => {
    expect(setOfferAsFavorite(mockOffer)).toEqual({
      type: ActionType.SET_OFFER_AS_FAVORITE,
      payload: mockOffer,
    });
  });
});
