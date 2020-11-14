import {ActionCreator} from "./action";
import {APIRoute, getCitiesFromOffersList, offersAdapter, citiesAdapter} from "../utils";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = data.map((offer) => offersAdapter(offer));
      //dispatch(ActionCreator.getInitialOffers(offers));
      dispatch(ActionCreator.getOffers(offers));

      const cities = getCitiesFromOffersList(data).map((city) => citiesAdapter(city));
      dispatch(ActionCreator.getCities(cities));

      dispatch(ActionCreator.setActiveCity(cities[0]));
    })
);
