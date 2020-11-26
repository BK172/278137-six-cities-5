import {
  ActionType,
  changeSortingType,
  setActiveCity,
  setActiveOffer,
  getCities,
  getOffers,
  getOffersNearBy,
  getOfferById,
  getFavoriteOffers,
  setOfferAsFavorite,
  getAuthInfo,
  getReviews,
  requireAuthorization,
  redirectToRoute,
  isLoading
} from "./action";
import {
  mockCity,
  mockCities,
  mockOffer,
  mockOffers,
  mockReviews,
  mockAuthInfo
} from "../utils";
import {
  INITIAL_SORTING_TYPE,
  AuthStatus
} from "../constants";

describe(`Should action creators work correctly`, () => {
  it(`Should changeSortingType works correctly`, () => {
    expect(changeSortingType(INITIAL_SORTING_TYPE)).toEqual({
      type: ActionType.CHANGE_SORTING_TYPE,
      payload: INITIAL_SORTING_TYPE,
    });
  });

  it(`Should setActiveCity works correctly`, () => {
    expect(setActiveCity(mockCity)).toEqual({
      type: ActionType.SET_ACTIVE_CITY,
      payload: mockCity,
    });
  });

  it(`Should setActiveOffer works correctly`, () => {
    expect(setActiveOffer(mockOffer)).toEqual({
      type: ActionType.SET_ACTIVE_OFFER,
      payload: mockOffer,
    });
  });

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

  it(`Should setOfferAsFavorite works correctly`, () => {
    expect(setOfferAsFavorite(mockOffer)).toEqual({
      type: ActionType.SET_OFFER_AS_FAVORITE,
      payload: mockOffer,
    });
  });

  it(`Should getAuthInfo works correctly`, () => {
    expect(getAuthInfo(mockAuthInfo)).toEqual({
      type: ActionType.GET_AUTH_INFO,
      payload: mockAuthInfo,
    });
  });

  it(`Should getReviews works correctly`, () => {
    expect(getReviews(mockReviews)).toEqual({
      type: ActionType.GET_REVIEWS,
      payload: mockReviews,
    });
  });

  it(`Should requireAuthorization works correctly`, () => {
    expect(requireAuthorization(AuthStatus.AUTH)).toEqual({
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthStatus.AUTH,
    });
  });

  it(`Should redirectToRoute works correctly`, () => {
    expect(redirectToRoute(``)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: ``,
    });
  });

  it(`Should isLoading works correctly`, () => {
    expect(isLoading(false)).toEqual({
      type: ActionType.IS_LOADING,
      payload: false,
    });
  });
});
