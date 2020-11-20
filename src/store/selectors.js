import {createSelector} from "reselect";

const getOffers = (({DATA}) => DATA.offers);
// export const getOffersNearBy = (({DATA}) => DATA.offersNearBy);
// export const getFavoriteOffers = (({DATA}) => DATA.favoriteOffers);
// export const getCurrentOffer = (({DATA}) => DATA.currentOffer);
// export const getCities = (({DATA}) => DATA.cities);
// export const getAuthInfo = (({DATA}) => DATA.authInfo);
// export const getReviews = (({DATA}) => DATA.reviews);

// export const getActiveOffer = (({PROCESS}) => PROCESS.activeOffer);
const getActiveCity = (({PROCESS}) => PROCESS.activeCity);
const getSortingType = (({PROCESS}) => PROCESS.sortingType);

export const getFilteredOffers = createSelector(
    [getActiveCity, getOffers],
    (activeCity, offers) => {
      return offers.filter((offer) => offer.city.name === activeCity.name);
    }
);

export const getSortedOffers = createSelector(
    [getSortingType, getFilteredOffers],
    (sortingType, offers) => {
      switch (sortingType) {
        case `popular`:
          return offers.slice();
        case `to-high`:
          return offers.slice().sort((a, b) => a.price - b.price);
        case `to-low`:
          return offers.slice().sort((a, b) => b.price - a.price);
        case `top-rated`:
          return offers.slice().sort((a, b) => b.rating - a.rating);
      }

      return offers;
    }
);
