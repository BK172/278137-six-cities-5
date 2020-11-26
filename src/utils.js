import {
  MARKUP_CITIES_LIST,
  REVIEW_DATE_FORMAT,
  REVIEW_RATING_ELEMENT_WIDTH,
  INITIAL_SORTING_TYPE,
  AuthStatus
} from "./constants";
import {NameSpace} from "./store/reducers/root-reducer";
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

export const mockCity = {
  name: `Paris`,
  coordinates: [52.3909553943508, 4.85309666406398],
  zoom: 12,
};

export const mockCities = [mockCity];

export const mockHost = {
  avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/1.jpg`,
  id: 1,
  isPro: false,
  name: `qwerty`,
};

export const mockOffer = {
  bedrooms: 3,
  city: mockCity,
  description: `A new spacious villa, one floor. All commodities.`,
  facilities: [`Heating`, `Kitchen`, `Cable TV`],
  owner: mockHost,
  offerId: 1,
  photos: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`],
  isFavorite: false,
  isPremium: true,
  coordinates: [52.3909553943508, 4.85309666406398],
  zoom: 12,
  guests: 2,
  image: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
  price: 1500,
  rating: 5,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`,
};

export const mockOffers = [mockOffer];

const mockOffersMapByCity = new Map();
mockOffersMapByCity.set(`Paris`, mockOffers);
export {mockOffersMapByCity};

export const mockReview = {
  reviewId: 10,
  avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/1.jpg`,
  name: `Qwerty`,
  rating: 5,
  comment: `What an amazing view! The house is stunning and in an amazing location.`,
  isPro: true,
  date: new Date(`2020-11-23T21:00:00.000Z`),
  userId: 20,
};

export const mockReviews = [mockReview];

export const mockAuthInfo = {
  'avatar_url': `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/1.jpg`,
  'email': `qwerty@qwerty.ru`,
  'id': 1,
  'is_pro': false,
  'name': `qwerty`,
};

export const makeInitialStateMock = () => ({
  [NameSpace.DATA]: {
    offers: [mockOffer],
    offersNearBy: [mockOffer],
    favoriteOffers: [mockOffer],
    currentRoomOffer: mockOffer,
    cities: [mockCity],
    authInfo: mockAuthInfo,
    reviews: [mockReview],
  },
  [NameSpace.PROCESS]: {
    activeOffer: mockOffer,
    activeCity: mockCity,
    sortingType: INITIAL_SORTING_TYPE,
    isLoadingFlag: false,
  },
  [NameSpace.USER]: {
    authStatus: AuthStatus.AUTH,
  }
});
