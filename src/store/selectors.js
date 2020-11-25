import {createSelector} from "reselect";
import {getOffersMapByCity} from "../utils";
import {SortingTypesNames} from "../constants";
import moment from "moment";

export const getOffers = (({DATA}) => DATA.offers);
export const getOffersNearBy = (({DATA}) => DATA.offersNearBy);
export const getFavoriteOffers = (({DATA}) => DATA.favoriteOffers);
export const getCurrentRoomOffer = (({DATA}) => DATA.currentRoomOffer);
export const getCities = (({DATA}) => DATA.cities);
export const getAuthInfo = (({DATA}) => DATA.authInfo);
export const getReviews = (({DATA}) => {
  return DATA.reviews.sort((a, b) => {
    return moment.utc(a.date, `DD/MM/YYYY`).diff(moment.utc(b.date, `DD/MM/YYYY`));
  });
});

export const getActiveOffer = (({PROCESS}) => PROCESS.activeOffer);
export const getActiveCity = (({PROCESS}) => PROCESS.activeCity);
export const getSortingType = (({PROCESS}) => PROCESS.sortingType);
export const getIsLoadingFlag = (({PROCESS}) => PROCESS.isLoadingFlag);

export const getAuthStatus = (({USER}) => USER.authStatus);

export const getFavoriteOffersMapByCity = createSelector(
    getFavoriteOffers,
    (favoriteOffers) => {
      return getOffersMapByCity(favoriteOffers);
    }
);

export const getFilteredOffersByCity = createSelector(
    [getActiveCity, getOffers],
    (activeCity, offers) => {
      return offers.filter((offer) => offer.city.name === activeCity.name);
    }
);

export const getSortedOffersByPrice = createSelector(
    [getSortingType, getFilteredOffersByCity],
    (sortingType, offers) => {
      switch (sortingType) {
        case SortingTypesNames.TO_HIGH:
          return offers.slice().sort((a, b) => a.price - b.price);
        case SortingTypesNames.TO_LOW:
          return offers.slice().sort((a, b) => b.price - a.price);
        case SortingTypesNames.TOP_RATED:
          return offers.slice().sort((a, b) => b.rating - a.rating);
        default:
          return offers.slice();
      }
    }
);
