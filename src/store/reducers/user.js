import {ActionType} from "../action";
import {AuthStatus} from "../../constants";
import {extend} from "../../utils";

const initialState = {
  authStatus: AuthStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return extend(state, {
        authStatus: action.payload,
      });
  }

  return state;
};

export {user};
