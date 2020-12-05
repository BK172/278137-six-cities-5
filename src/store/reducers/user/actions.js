export const ActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  SET_AUTH_INFO: `SET_AUTH_INFO`,
};

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: status,
});

export const setAuthInfo = (authInfo) => ({
  type: ActionType.SET_AUTH_INFO,
  payload: authInfo,
});
