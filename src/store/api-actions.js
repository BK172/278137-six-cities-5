import {getOffers, getCities, setActiveCity} from "./action";
import {APIRoute, getCitiesFromOffersList, offersAdapter, citiesAdapter} from "../utils";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = data.map((offer) => offersAdapter(offer));
      dispatch(getOffers(offers));

      const cities = getCitiesFromOffersList(data).map((city) => citiesAdapter(city));
      dispatch(getCities(cities));
      dispatch(setActiveCity(cities[0]));
    })
);
