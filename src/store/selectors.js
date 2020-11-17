import {createSelector} from "reselect";

const getActiveCity = (({PROCESS}) => PROCESS.activeCity);
const getOffers = (({DATA}) => DATA.offers);
const getSortingType = (({PROCESS}) => PROCESS.sortingType);

export const getFilteredOffers = createSelector(
    [getSortingType, getActiveCity, getOffers],
    (sortingType, activeCity, offers) => {
      const filteredOffers = offers.filter((offer) => offer.city.name === activeCity.name);

      switch (sortingType) {
        case `popular`:
          return filteredOffers.slice();
        case `to-high`:
          return filteredOffers.slice().sort((a, b) => a.price - b.price);
        case `to-low`:
          return filteredOffers.slice().sort((a, b) => b.price - a.price);
        case `top-rated`:
          return filteredOffers.slice().sort((a, b) => b.rating - a.rating);
      }

      return filteredOffers;
    }
);
