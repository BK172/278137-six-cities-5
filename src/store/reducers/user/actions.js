export const ActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  GET_AUTH_INFO: `GET_AUTH_INFO`,
};

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: status,
});

export const getAuthInfo = (authInfo) => ({
  type: ActionType.GET_AUTH_INFO,
  payload: authInfo,
});
