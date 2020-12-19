import {appProcess} from "./app-process";
import {ActionType} from "./actions";
import {INITIAL_SORTING_TYPE} from "../../../constants";
import {mockCity, mockOffer} from "../../../utils";

jest.mock(`../root-reducer`);

describe(`Reducer appProcess works correctly`, () => {
  it(`Should return initial state`, () => {
    expect(appProcess(undefined, {})).toEqual({
      activeOffer: null,
      activeCity: {},
      sortingType: INITIAL_SORTING_TYPE,
      isLoadingFlag: false,
    });
  });

  it(`Should update sortingType`, () => {
    expect(appProcess({
      sortingType: INITIAL_SORTING_TYPE,
    }, {
      type: ActionType.CHANGE_SORTING_TYPE,
      payload: `top-rated`
    })).toEqual({
      sortingType: `top-rated`
    });
  });

  it(`Should update activeCity`, () => {
    expect(appProcess({
      activeCity: {},
    }, {
      type: ActionType.SET_ACTIVE_CITY,
      payload: mockCity
    })).toEqual({
      activeCity: mockCity
    });
  });

  it(`Should update activeOffer`, () => {
    expect(appProcess({
      activeOffer: null,
    }, {
      type: ActionType.SET_ACTIVE_OFFER,
      payload: mockOffer
    })).toEqual({
      activeOffer: mockOffer
    });
  });

  it(`Should update isLoadingFlag`, () => {
    expect(appProcess({
      isLoadingFlag: false,
    }, {
      type: ActionType.IS_LOADING,
      payload: true
    })).toEqual({
      isLoadingFlag: true
    });
  });
});
