export const APIRoute = {
  OFFERS: `/hotels`,
};

export const getElementWidthByRating = (rating) => Math.round(rating) * 20;

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const initialSortingType = `popular`;
export const SortingTypes = {
  'popular': `Popular`,
  'to-high': `Price: low to high`,
  'to-low': `Price: high to low`,
  'top-rated': `Top rated first`
};

export const getCitiesFromOffersList = (offers) => {
  return offers.reduce((acc, item) => {
    if (acc.map[item.city.name]) {
      return acc;
    }

    acc.map[item.city.name] = true;
    acc.cities.push(item.city);

    return acc;
  }, {
    map: {},
    cities: []
  })
  .cities;
};

export const offersAdapter = (offer) => {
  return {
    bedrooms: offer.bedrooms,
    city: {
      name: offer.city.name,
      coordinates: [offer.city.location.latitude, offer.city.location.longitude],
      zoom: offer.city.location.zoom,
    },
    description: offer.description,
    facilities: offer.goods,
    owner: {
      id: offer.host.id,
      avatar: offer.host.avatar_url,
      name: offer.host.name,
      super: offer.host.is_pro,
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

export const citiesAdapter = (city) => {
  return {
    name: city.name,
    coordinates: [city.location.latitude, city.location.longitude],
    zoom: city.location.zoom,
  };
};
