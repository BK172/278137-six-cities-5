import {appData} from "./app-data";
import {ActionType} from "./actions";
import {
  mockCities,
  mockOffer,
  mockOffers,
  mockReviews,
  mockAuthInfo,
  extend
} from "../../../utils";

jest.mock(`./root-reducer`);

describe(`Should reducer appData works correctly`, () => {
  it(`Should reducer appData return initial state`, () => {
    expect(appData(undefined, {})).toEqual({
      offers: [],
      offersNearBy: [],
      favoriteOffers: [],
      currentRoomOffer: null,
      cities: [],
      authInfo: {},
      reviews: [],
    });
  });

  it(`Should reducer appData update offers`, () => {
    expect(appData({
      offers: [],
    }, {
      type: ActionType.GET_OFFERS,
      payload: mockOffers
    })).toEqual({
      offers: mockOffers
    });
  });

  it(`Should reducer appData update offersNearBy`, () => {
    expect(appData({
      offersNearBy: [],
    }, {
      type: ActionType.GET_OFFERS_NEARBY,
      payload: mockOffers
    })).toEqual({
      offersNearBy: mockOffers
    });
  });

  it(`Should reducer appData update currentRoomOffer`, () => {
    expect(appData({
      currentRoomOffer: null,
    }, {
      type: ActionType.GET_OFFER_BY_ID,
      payload: mockOffer
    })).toEqual({
      currentRoomOffer: mockOffer
    });
  });

  it(`Should reducer appData update favoriteOffers`, () => {
    expect(appData({
      favoriteOffers: [],
    }, {
      type: ActionType.GET_FAVORITE_OFFERS,
      payload: mockOffers
    })).toEqual({
      favoriteOffers: mockOffers
    });
  });

  it(`Should reducer appData update cities`, () => {
    expect(appData({
      cities: [],
    }, {
      type: ActionType.GET_CITIES,
      payload: mockCities
    })).toEqual({
      cities: mockCities
    });
  });

  it(`Should reducer appData update authInfo`, () => {
    expect(appData({
      authInfo: {},
    }, {
      type: ActionType.GET_AUTH_INFO,
      payload: mockAuthInfo
    })).toEqual({
      authInfo: mockAuthInfo
    });
  });

  it(`Should reducer appData update reviews`, () => {
    expect(appData({
      reviews: [],
    }, {
      type: ActionType.GET_REVIEWS,
      payload: mockReviews
    })).toEqual({
      reviews: mockReviews
    });
  });

  it(`Should reducer appData update offer as favorite`, () => {
    const favoriteMockOffer = extend(mockOffer, {isFavorite: !mockOffer.isFavorite});

    expect(appData({
      offers: [mockOffer],
      offersNearBy: [mockOffer],
      favoriteOffers: [mockOffer],
      currentRoomOffer: mockOffer
    }, {
      type: ActionType.SET_OFFER_AS_FAVORITE,
      payload: favoriteMockOffer
    })).toEqual({
      offers: [favoriteMockOffer],
      offersNearBy: [mockOffer],
      favoriteOffers: [favoriteMockOffer],
      currentRoomOffer: favoriteMockOffer
    });
  });
});
