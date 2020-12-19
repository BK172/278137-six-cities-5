import {user} from "./user";
import {ActionType} from "./actions";
import {mockAuthInfo} from "../../../utils";

jest.mock(`../root-reducer`);

describe(`Reducer user works correctly`, () => {
  it(`Should return initial state`, () => {
    expect(user(undefined, {})).toEqual({
      authStatus: `NO_AUTH`,
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

  it(`Should update authStatus to AUTH`, () => {
    expect(user({
      authStatus: `NO_AUTH`,
    }, {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: `AUTH`
    })).toEqual({
      authStatus: `AUTH`
    });
  });
});
