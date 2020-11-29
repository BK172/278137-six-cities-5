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
