import {
  ActionType,
  changeSortingType,
  setActiveCity,
  setActiveOffer,
  isLoading,
} from "./actions";
import {mockCity, mockOffer} from "../../../utils";
import {INITIAL_SORTING_TYPE} from "../../../constants";

describe(`Should action creators for reducer app-process work correctly`, () => {
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

  it(`Should isLoading works correctly`, () => {
    expect(isLoading(false)).toEqual({
      type: ActionType.IS_LOADING,
      payload: false,
    });
  });
});
