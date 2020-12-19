import {
  ActionType,
  changeSortingType,
  setActiveCity,
  setActiveOffer,
  isLoading,
} from "./actions";
import {mockCity, mockOffer} from "../../../utils";

describe(`Action creators for reducer app-process work correctly`, () => {
  test(`changeSortingType works correctly`, () => {
    expect(changeSortingType(`popular`)).toEqual({
      type: ActionType.CHANGE_SORTING_TYPE,
      payload: `popular`,
    });
  });

  test(`setActiveCity works correctly`, () => {
    expect(setActiveCity(mockCity)).toEqual({
      type: ActionType.SET_ACTIVE_CITY,
      payload: mockCity,
    });
  });

  test(`setActiveOffer works correctly`, () => {
    expect(setActiveOffer(mockOffer)).toEqual({
      type: ActionType.SET_ACTIVE_OFFER,
      payload: mockOffer,
    });
  });

  test(`isLoading works correctly`, () => {
    expect(isLoading(false)).toEqual({
      type: ActionType.IS_LOADING,
      payload: false,
    });
  });
});
