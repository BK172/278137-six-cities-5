import {ActionType} from "./action";
import offers from "../mocks/offers";
import cities from "../mocks/cities";
import {extend} from "../utils/utils";

const initialState = {
  activeCity: cities[0],
  offers: offers.filter((offer) => offer.city === cities[0].activeCity)
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        activeCity: action.payload
      });
    case ActionType.GET_OFFERS_LIST:
      return extend(state, {
        offers: offers.filter((offer) => offer.city === state.activeCity)
      });
  }
  return state;
};

export {reducer};
