import {ActionType} from "./actions";
import {AuthStatus} from "../../../constants";
import {extend} from "../../../utils";

const initialState = {
  authInfo: null,
  authStatus: AuthStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return extend(state, {
        authStatus: action.payload,
      });
    case ActionType.GET_AUTH_INFO:
      return extend(state, {
        authInfo: action.payload
      });
  }

  return state;
};

export {user};
