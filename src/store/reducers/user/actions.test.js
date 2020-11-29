import {ActionType, requireAuthorization} from "./actions";
import {AuthStatus} from "../../../constants";

describe(`Should action creators for reducer user work correctly`, () => {
  it(`Should requireAuthorization works correctly`, () => {
    expect(requireAuthorization(AuthStatus.AUTH)).toEqual({
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthStatus.AUTH,
    });
  });
});
