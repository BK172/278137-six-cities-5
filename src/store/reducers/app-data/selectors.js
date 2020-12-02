import moment from "moment";
import {createSelector} from "reselect";
import {getActiveCity, getSortingType} from "../app-process/selectors";
import {getOffersMapByCity} from "../../../utils";
import {SortingTypesNames} from "../../../constants";

export const getOffers = (({DATA}) => DATA.offers);
export const getOffersNearBy = (({DATA}) => DATA.offersNearBy);
export const getFavoriteOffers = (({DATA}) => DATA.favoriteOffers);
export const getCurrentRoomOffer = (({DATA}) => DATA.currentRoomOffer);
export const getCities = (({DATA}) => DATA.cities);
export const getReviews = (({DATA}) => {
  return DATA.reviews.sort((a, b) => {
    return moment(b.date).format(`x`) - moment(a.date).format(`x`);
  });
});

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
