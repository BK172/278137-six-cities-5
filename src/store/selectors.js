import {createSelector} from "reselect";
import {getOffersMapByCity} from "../utils";

const getOffers = (({DATA}) => DATA.offers);
// export const getOffersNearBy = (({DATA}) => DATA.offersNearBy);
const getFavoriteOffers = (({DATA}) => DATA.favoriteOffers);
// export const getCurrentOffer = (({DATA}) => DATA.currentOffer);
// export const getCurrentRoomOffer = (({DATA}) => DATA.currentRoomOffer);
// const getCities = (({DATA}) => DATA.cities);
// export const getAuthInfo = (({DATA}) => DATA.authInfo);
// export const getReviews = (({DATA}) => DATA.reviews);

// export const getActiveOffer = (({PROCESS}) => PROCESS.activeOffer);
const getActiveCity = (({PROCESS}) => PROCESS.activeCity);
const getSortingType = (({PROCESS}) => PROCESS.sortingType);

export const getFavoriteOffersMapByCity = createSelector(
    getFavoriteOffers,
    (favoriteOffers) => {
      return getOffersMapByCity(favoriteOffers);
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

// export const getCities = createSelector(
//     getOffers,
//     (offers) => {
//       const cities = getOffersMapByCity(offers).values();

//       return Array.from(cities);
//     }
// );
