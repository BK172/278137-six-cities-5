import {ActionType} from "./../action";
import {extend} from "../../utils";

const initialState = {
  offers: [],
  cities: [],
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload
      });
    case ActionType.GET_CITIES:
      return extend(state, {
        cities: action.payload
      });
    case ActionType.SORT_OFFERS:
      return extend(state, {
        offers: action.payload
      });
  }
  return state;
};

export {appData};
