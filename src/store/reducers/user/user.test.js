import {user} from "./user";
import {ActionType} from "./actions";
import {AuthStatus} from "../../../constants";
import {mockAuthInfo} from "../../../utils";

jest.mock(`../root-reducer`);

describe(`Reducer user works correctly`, () => {
  it(`Should return initial state`, () => {
    expect(user(undefined, {})).toEqual({
      authStatus: AuthStatus.NO_AUTH,
      authInfo: null,
    });
  });

  it(`Should update authInfo`, () => {
    expect(user({
      authInfo: null,
    }, {
      type: ActionType.SET_AUTH_INFO,
      payload: mockAuthInfo
    })).toEqual({
      authInfo: mockAuthInfo
    });
  });

  it(`Should update authStatus to AuthStatus.AUTH`, () => {
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
