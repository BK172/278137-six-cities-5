import {ActionType, requireAuthorization, getAuthInfo, isLoggedIn} from "./actions";
import {AuthStatus} from "../../../constants";
import {mockAuthInfo} from "../../../utils";

describe(`Should action creators for reducer user work correctly`, () => {
  it(`Should requireAuthorization works correctly`, () => {
    expect(requireAuthorization(AuthStatus.AUTH)).toEqual({
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthStatus.AUTH,
    });
  });

  it(`Should getAuthInfo works correctly`, () => {
    expect(getAuthInfo(mockAuthInfo)).toEqual({
      type: ActionType.GET_AUTH_INFO,
      payload: mockAuthInfo,
    });
  });

  it(`Should isLoggedIn works correctly`, () => {
    expect(isLoggedIn(false)).toEqual({
      type: ActionType.IS_LOGGED_IN,
      payload: false,
    });
  });
});
