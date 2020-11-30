import {user} from "./user";
import {ActionType} from "./actions";
import {AuthStatus} from "../../../constants";
import {mockAuthInfo} from "../../../utils";

jest.mock(`../root-reducer`);

describe(`Should reducer user works correctly`, () => {
  it(`Should reducer user return initial state`, () => {
    expect(user(undefined, {})).toEqual({
      authStatus: AuthStatus.NO_AUTH,
      authInfo: null,
    });
  });

  it(`Should reducer user update authInfo`, () => {
    expect(user({
      authInfo: null,
    }, {
      type: ActionType.GET_AUTH_INFO,
      payload: mockAuthInfo
    })).toEqual({
      authInfo: mockAuthInfo
    });
  });

  it(`Should reducer user update authStatus to AuthStatus.AUTH`, () => {
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
