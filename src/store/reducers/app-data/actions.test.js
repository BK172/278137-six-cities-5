import {
  ActionType,
  getCities,
  getOffers,
  getOffersNearBy,
  getOfferById,
  getFavoriteOffers,
  setOfferAsFavorite,
  getReviews,
} from "./actions";
import {
  mockCities,
  mockOffer,
  mockOffers,
  mockReviews,
} from "../../../utils";

describe(`Should action creators for reducer app-data work correctly`, () => {
  it(`Should getCities works correctly`, () => {
    expect(getCities(mockCities)).toEqual({
      type: ActionType.GET_CITIES,
      payload: mockCities,
    });
  });

  it(`Should getOffers works correctly`, () => {
    expect(getOffers(mockOffers)).toEqual({
      type: ActionType.GET_OFFERS,
      payload: mockOffers,
    });
  });

  it(`Should getOffersNearBy works correctly`, () => {
    expect(getOffersNearBy(mockOffers)).toEqual({
      type: ActionType.GET_OFFERS_NEARBY,
      payload: mockOffers,
    });
  });

  it(`Should getOfferById works correctly`, () => {
    expect(getOfferById(mockOffer)).toEqual({
      type: ActionType.GET_OFFER_BY_ID,
      payload: mockOffer,
    });
  });

  it(`Should getFavoriteOffers works correctly`, () => {
    expect(getFavoriteOffers(mockOffers)).toEqual({
      type: ActionType.GET_FAVORITE_OFFERS,
      payload: mockOffers,
    });
  });

  it(`Should getReviews works correctly`, () => {
    expect(getReviews(mockReviews)).toEqual({
      type: ActionType.GET_REVIEWS,
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
