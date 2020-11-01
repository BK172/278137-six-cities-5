const ratingToInteger = (rating) => Math.round(rating);

export const getRatingElementWidth = (rating) => ratingToInteger(rating) * 20;

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const SortingTypes = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`
};

export const getSortedOffers = (offers, sortType) => {
  switch (sortType) {
    case SortingTypes.POPULAR:
      return offers.slice();
    case SortingTypes.PRICE_LOW_TO_HIGH:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortingTypes.PRICE_HIGH_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortingTypes.TOP_RATED_FIRST:
      return offers.slice().sort((a, b) => b.rating - a.rating);
  }

  return offers;
};

export const mapClasses = {
  cities: `cities__map`,
  property: `property__map`
};

export const cardClasses = {
  main: {
    'place-card': `cities__place-card`,
    'place-card__image-wrapper': `cities__image-wrapper`
  },
  room: {
    'place-card': `near-places__card`,
    'place-card__image-wrapper': `near-places__image-wrapper`
  },
  favorite: {
    'place-card': `favorites__card`,
    'place-card__image-wrapper': `favorites__image-wrapper`,
    'place-card__info': `favorites__card-info`
  }
};

export const cardImgShapes = {
  main: {
    width: 260,
    height: 200
  },
  room: {
    width: 260,
    height: 200
  },
  favorite: {
    width: 150,
    height: 110
  }
};
