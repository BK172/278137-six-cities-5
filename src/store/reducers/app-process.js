import {ActionType} from "./../action";
import {initialSortingType} from "../../const";
import {extend} from "../../utils";

const initialState = {
  activeOffer: null,
  activeCity: {},
  sortingType: initialSortingType,
};

const appProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SORTING_TYPE:
      return extend(state, {
        sortingType: action.payload
      });
    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {
        activeCity: action.payload
      });
    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload
      });
  }
  return state;
};

export {appProcess};
