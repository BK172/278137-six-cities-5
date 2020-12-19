import {ActionType, requireAuthorization, setAuthInfo} from "./actions";
import {mockAuthInfo} from "../../../utils";

describe(`Action creators for reducer user work correctly`, () => {
  test(`requireAuthorization works correctly`, () => {
    expect(requireAuthorization(`AUTH`)).toEqual({
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: `AUTH`,
    });
  });

  test(`setAuthInfo works correctly`, () => {
    expect(setAuthInfo(mockAuthInfo)).toEqual({
      type: ActionType.SET_AUTH_INFO,
      payload: mockAuthInfo,
    });
  });
});
