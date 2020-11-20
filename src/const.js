export const MarkupCitiesList = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`,
];

export const ResponseType = {
  SUCCESS: `SUCCESS`,
  ERROR: `ERROR`,
};

export const HttpCode = {
  UNAUTHORIZED: 401,
};

export const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  ROOM: `/offer/:id`,
};

export const APIRoute = {
  OFFERS: `/hotels`,
  LOGIN: `/login`,
  REVIEWS: `/comments`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const initialSortingType = `popular`;
export const SortingTypes = {
  'popular': `Popular`,
  'to-high': `Price: low to high`,
  'to-low': `Price: high to low`,
  'top-rated': `Top rated first`,
};

export const OfferType = {
  MAIN: `MAIN`,
  ROOM: `ROOM`,
  FAVORITE: `FAVORITE`,
};

export const MapType = {
  MAIN: `MAIN`,
  ROOM: `ROOM`,
};

export const OfferClasses = {
  MAIN: {
    article: `cities__place-card`,
    wrapper: `cities__image-wrapper`,
  },
  ROOM: {
    article: `near-places__card`,
    wrapper: `near-places__image-wrapper`,
  },
  FAVORITE: {
    article: `favorites__card`,
    wrapper: `favorites__image-wrapper`,
    info: `favorites__card-info`,
  },
};

export const OfferImgShapes = {
  MAIN: {
    width: 260,
    height: 200,
  },
  ROOM: {
    width: 260,
    height: 200,
  },
  FAVORITE: {
    width: 150,
    height: 110,
  },
};

export const MapClasses = {
  MAIN: `cities__map`,
  ROOM: `property__map`,
};
