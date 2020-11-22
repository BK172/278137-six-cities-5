import {ActionType} from "./../action";
import {InitialSortingType} from "../../const";
import {extend} from "../../utils";

const initialState = {
  activeOffer: null,
  activeCity: {},
  sortingType: InitialSortingType,
  isLoadingFlag: false,
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
    case ActionType.IS_LOADING:
      return extend(state, {
        isLoadingFlag: action.payload
      });
  }
  return state;
};

export {appProcess};
