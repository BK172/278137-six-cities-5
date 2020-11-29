import {ActionType, redirectToRoute} from "./actions";

describe(`Should action creators for middlewares work correctly`, () => {
  it(`Should redirectToRoute works correctly`, () => {
    expect(redirectToRoute(``)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: ``,
    });
  });
});
