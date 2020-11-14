import {loadOffers} from "./action";
import {APIRoute} from "../utils";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get((APIRoute.OFFERS)
    .then(({data}) => {
      dispatch(loadOffers(data));
    })
  )
);
