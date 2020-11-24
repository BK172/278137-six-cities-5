import {
  MARKUP_CITIES_LIST,
  REVIEW_DATE_FORMAT,
  REVIEW_RATING_ELEMENT_WIDTH
} from "./const";
import moment from "moment";

export const getElementWidthByRating = (rating) => Math.round(rating) * REVIEW_RATING_ELEMENT_WIDTH;

export const getReviewDate = (date) => moment(date).format(REVIEW_DATE_FORMAT);

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const updateOfferById = (offer, offers) => {
  const offerIndex = offers.findIndex((item) => item.offerId === offer.offerId);

  return offerIndex !== -1
    ? [...offers.slice(0, offerIndex), offer, ...offers.slice(offerIndex + 1)]
    : [...offers, offer];
};

export const removeOfferById = (offer, offers) => {
  const offerIndex = offers.findIndex((item) => item.id === offer.id);

  return offerIndex !== -1
    ? [...offers.slice(0, offerIndex), ...offers.slice(offerIndex + 1)]
    : [...offers];
};

const capitalizeWord = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export const getOffersMapByCity = (offers) => {
  const offersMap = new Map();
  const citiesList = MARKUP_CITIES_LIST.map((city) => capitalizeWord(city));

  citiesList.forEach((cityName) => {
    offersMap.set(cityName, []);
  });

  offers.forEach((offer) => {
    const cityName = capitalizeWord(offer.city.name);
    offersMap.get(cityName).push(offer);
  });

  offersMap.forEach((value, key, map) => {
    if (!value.length) {
      map.delete(key);
    }
  });

  return offersMap;
};

export const getCitiesFromOffers = (offers) => {
  return Array.from(getOffersMapByCity(offers).values())
    .map((city) => city[0].city);
};

const cityAdapter = (city) => {
  return {
    name: city.name,
    coordinates: [city.location.latitude, city.location.longitude],
    zoom: city.location.zoom,
  };
};

const hostAdapter = (host) => {
  return {
    id: host.id,
    avatar: host.avatar_url,
    name: host.name,
    isPro: host.is_pro,
  };
};

export const offersAdapter = (offer) => {
  return {
    bedrooms: offer.bedrooms,
    city: cityAdapter(offer.city),
    description: offer.description,
    facilities: offer.goods,
    owner: hostAdapter(offer.host),
    offerId: offer.id,
    photos: offer.images,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    coordinates: [offer.location.latitude, offer.location.longitude],
    zoom: offer.location.zoom,
    guests: offer.max_adults,
    image: offer.preview_image,
    price: offer.price,
    rating: offer.rating,
    title: offer.title,
    type: offer.type,
  };
};

export const reviewsAdapter = (review) => {
  return {
    reviewId: review.id,
    avatar: review.user.avatar_url,
    name: review.user.name,
    rating: review.rating,
    comment: review.comment,
    isPro: review.user.is_pro,
    date: review.date,
    userId: review.user.id,
  };
};
