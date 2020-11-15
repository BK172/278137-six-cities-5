import {createSelector} from "reselect";

const getActiveCity = (({PROCESS}) => PROCESS.activeCity);
const getOffers = (({DATA}) => DATA.offers);

export const getFilteredOffers = createSelector(
    [getActiveCity, getOffers],
    (activeCity, offers) => {
      return offers.filter((offer) => offer.city.name === activeCity.name);
    }
);
