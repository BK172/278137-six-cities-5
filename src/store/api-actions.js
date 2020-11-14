import {ActionCreator} from "./action";
import {APIRoute, getCitiesFromOffersList, offersAdapter, citiesAdapter} from "../utils";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = data.map((offer) => offersAdapter(offer));
      dispatch(ActionCreator.getOffers(offers));

      const cities = getCitiesFromOffersList(data).map((city) => citiesAdapter(city));
      console.log('cs:', getCitiesFromOffersList(data));
      console.log('cities:', cities);
      dispatch(ActionCreator.getCities(cities));

      console.log('activeCity:', cities[0]);
      dispatch(ActionCreator.changeCity(cities[0]));
    })
);
