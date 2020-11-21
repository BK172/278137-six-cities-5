import {createSelector} from "reselect";
import {MarkupCitiesList} from "../const";
import _ from "lodash";

const getOffers = (({DATA}) => DATA.offers);
// export const getOffersNearBy = (({DATA}) => DATA.offersNearBy);
const getFavoriteOffers = (({DATA}) => DATA.favoriteOffers);
// export const getCurrentOffer = (({DATA}) => DATA.currentOffer);
const getCities = (({DATA}) => DATA.cities);
// export const getAuthInfo = (({DATA}) => DATA.authInfo);
// export const getReviews = (({DATA}) => DATA.reviews);

// export const getActiveOffer = (({PROCESS}) => PROCESS.activeOffer);
const getActiveCity = (({PROCESS}) => PROCESS.activeCity);
const getSortingType = (({PROCESS}) => PROCESS.sortingType);

export const getFavoriteOffersMapByCity = createSelector(
    getFavoriteOffers,
    (favoriteOffers) => {
      const favoritesMap = new Map();

      MarkupCitiesList.forEach((cityName) => {
        favoritesMap.set(cityName, []);
      });

      (favoriteOffers || []).forEach((offer) => {
        favoritesMap.get(offer.city.name).push(offer);
      });

      favoritesMap.forEach((value, key, map) => {
        !value.length && map.delete(key);
      });

      return favoritesMap;
    }
);

const getFilteredOffersByCity = createSelector(
    [getActiveCity, getOffers],
    (activeCity, offers) => {
      return offers.filter((offer) => offer.city.name === activeCity.name);
    }
);

export const getSortedOffersByPrice = createSelector(
    [getSortingType, getFilteredOffersByCity],
    (sortingType, offers) => {
      switch (sortingType) {
        case `to-high`:
          return offers.slice().sort((a, b) => a.price - b.price);
        case `to-low`:
          return offers.slice().sort((a, b) => b.price - a.price);
        case `top-rated`:
          return offers.slice().sort((a, b) => b.rating - a.rating);
        default:
          return offers.slice();
      }
    }
);

export const orderCitiesByList = createSelector(
    getCities,
    (cities) => {
      const orderedCities = [];

      MarkupCitiesList.forEach((cityName) => {
        const city = cities.find((item) => item.name === cityName);

        if (city) {
          orderedCities.push(city);
        }
      });

      return orderedCities;
    }
);

export const getCitiesFromOffersList = createSelector(
    getOffers,
    (offers) => {
      const cities = offers.map((offer) => offer.city);
      return _.uniqWith(cities, _.isEqual);
    }
);
