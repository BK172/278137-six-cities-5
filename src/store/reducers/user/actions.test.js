import {ActionType, requireAuthorization, setAuthInfo} from "./actions";
import {AuthStatus} from "../../../constants";
import {mockAuthInfo} from "../../../utils";

describe(`Action creators for reducer user work correctly`, () => {
  test(`requireAuthorization works correctly`, () => {
    expect(requireAuthorization(AuthStatus.AUTH)).toEqual({
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthStatus.AUTH,
    });
  });

  test(`setAuthInfo works correctly`, () => {
    expect(setAuthInfo(mockAuthInfo)).toEqual({
      type: ActionType.SET_AUTH_INFO,
      payload: mockAuthInfo,
    });
  });
});
