import {MarkupCitiesList} from "./const";

export const getElementWidthByRating = (rating) => Math.round(rating) * 20;

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

export const getOffersMapByCity = (offers) => {
  const offersMap = new Map();

  MarkupCitiesList.forEach((cityName) => {
    offersMap.set(cityName, []);
  });

  offers.forEach((offer) => {
    offersMap.get(offer.city.name).push(offer);
  });

  offersMap.forEach((value, key, map) => {
    if (!value.length) {
      map.delete(key);
    }
  });

  return offersMap;
};

const citiesAdapter = (city) => {
  return {
    name: city.name,
    coordinates: [city.location.latitude, city.location.longitude],
    zoom: city.location.zoom,
  };
};

export const offersAdapter = (offer) => {
  return {
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
