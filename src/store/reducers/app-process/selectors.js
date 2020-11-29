import {createSelector} from "reselect";
import {getOffers, getFavoriteOffers} from "../app-data/selectors";
import {getOffersMapByCity} from "../../../utils";
import {SortingTypesNames} from "../../../constants";

export const getActiveOffer = (({PROCESS}) => PROCESS.activeOffer);
export const getActiveCity = (({PROCESS}) => PROCESS.activeCity);
export const getSortingType = (({PROCESS}) => PROCESS.sortingType);
export const getIsLoadingFlag = (({PROCESS}) => PROCESS.isLoadingFlag);

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
