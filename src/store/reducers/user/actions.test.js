import {ActionType, requireAuthorization, setAuthInfo} from "./actions";
import {AuthStatus} from "../../../constants";
import {mockAuthInfo} from "../../../utils";

describe(`Should action creators for reducer user work correctly`, () => {
  it(`Should requireAuthorization works correctly`, () => {
    expect(requireAuthorization(AuthStatus.AUTH)).toEqual({
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthStatus.AUTH,
    });
  });

  it(`Should setAuthInfo works correctly`, () => {
    expect(setAuthInfo(mockAuthInfo)).toEqual({
      type: ActionType.SET_AUTH_INFO,
      payload: mockAuthInfo,
    });
  });
});
