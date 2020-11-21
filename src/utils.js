import _ from "lodash";
import {MarkupCitiesList} from "./const";

export const getElementWidthByRating = (rating) => Math.round(rating) * 20;

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getFavoriteOffersMapByCity = (favoriteOffers) => {
  const map = new Map();

  MarkupCitiesList.forEach((cityName) => {
    map.set(cityName, []);
  });

  favoriteOffers.forEach((offer) => {
    map.get(offer.city.name).push(offer);
  });

  return map;
};

export const updateOfferInOffersById = (offers, offer) => {
  const clonedOffers = offers ? offers.slice() : [];
  const offerIndex = clonedOffers.findIndex((item) => item.offerId === offer.offerId);

  if (offerIndex === -1) {
    return offers;
  }

  clonedOffers[offerIndex] = offer;

  return clonedOffers;
};

export const orderCitiesByList = (cities) => {
  const orderedCities = [];

  MarkupCitiesList.forEach((cityName) => {
    const city = cities.find((item) => item.name === cityName);

    if (city) {
      orderedCities.push(city);
    }
  });

  return orderedCities;
};

export const getCitiesFromOffersList = (offers) => {
  const cities = offers.map((offer) => offer.city);
  return _.uniqWith(cities, _.isEqual);
};

export const citiesAdapter = (city) => {
  return city && {
    name: city.name,
    coordinates: [city.location.latitude, city.location.longitude],
    zoom: city.location.zoom,
  };
};

export const offersAdapter = (offer) => {
  return offer && {
    bedrooms: offer.bedrooms,
    city: citiesAdapter(offer.city),
    description: offer.description,
    facilities: offer.goods,
    owner: {
      id: offer.host.id,
      avatar: offer.host.avatar_url,
      name: offer.host.name,
      isPro: offer.host.is_pro,
    },
    offerId: offer.id,
    photos: offer.images,
    favorite: offer.is_favorite,
    premium: offer.is_premium,
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
  return review && {
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
