import {user} from "./user";
import {ActionType} from "./actions";
import {AuthStatus} from "../../../constants";

jest.mock(`./root-reducer`);

describe(`Should reducer user works correctly`, () => {
  it(`Should reducer user return initial state`, () => {
    expect(user(undefined, {})).toEqual({
      authStatus: AuthStatus.NO_AUTH,
    });
  });

  it(`Should reducer user should update authStatus to AuthStatus.AUTH`, () => {
    expect(user({
      authStatus: AuthStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthStatus.AUTH
    })).toEqual({
      authStatus: AuthStatus.AUTH
    });
  });
});
