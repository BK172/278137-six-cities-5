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
  'top-rated': `Top rated first`
};
