export const ResponseType = {
  SUCCESS: `SUCCESS`,
  ERROR: `ERROR`,
};

export const HttpCode = {
  UNAUTHORIZED: 401,
  SUCCESS: 200,
};

export const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer`,
  ROOM: `/offer/:id`,
  ERROR: `/error`,
};

export const APIRoute = {
  OFFERS: `/hotels`,
  NEARBY: `/nearby`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  REVIEWS: `/comments`,
  FAVORITE: `/favorite`,
};

export const AuthStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const SortingTypesNames = {
  POPULAR: `popular`,
  TO_HIGH: `to-high`,
  TO_LOW: `to-low`,
  TOP_RATED: `top-rated`,
};

export const SortingTypes = {
  [SortingTypesNames.POPULAR]: `Popular`,
  [SortingTypesNames.TO_HIGH]: `Price: low to high`,
  [SortingTypesNames.TO_LOW]: `Price: high to low`,
  [SortingTypesNames.TOP_RATED]: `Top rated first`,
};

export const INITIAL_SORTING_TYPE = SortingTypesNames.POPULAR;

export const MARKUP_CITIES_LIST = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`,
];

export const MAX_PHOTOS_COUNT = 6;

export const REVIEW_DATE_FORMAT = `MMMM YYYY`;
export const REVIEW_RATING_ELEMENT_WIDTH = 20;
export const MAX_REVIEWS_ON_PAGE = 10;

export const ReviewFormTextAreaLength = {
  MIN: 50,
  MAX: 300,
};

export const ReviewFormRatings = [
  {mark: `5`, title: `perfect`},
  {mark: `4`, title: `good`},
  {mark: `3`, title: `not bad`},
  {mark: `2`, title: `badly`},
  {mark: `1`, title: `terribly`},
];

export const OfferType = {
  MAIN: `MAIN`,
  ROOM: `ROOM`,
  FAVORITE: `FAVORITE`,
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

export const MapType = {
  MAIN: `MAIN`,
  ROOM: `ROOM`,
};

export const MapClasses = {
  MAIN: `cities__map`,
  ROOM: `property__map`,
};

export const BookmarkBtnType = {
  MAIN: `MAIN`,
  ROOM: `ROOM`,
};

export const BookmarkBtnClasses = {
  MAIN: {
    btn: `place-card__bookmark-button button`,
    btnActive: `place-card__bookmark-button--active`,
    icon: `place-card__bookmark-icon`,
  },
  ROOM: {
    btn: `property__bookmark-button button`,
    btnActive: `property__bookmark-button--active`,
    icon: `property__bookmark-icon`,
  },
};

export const BookmarkBtnShapes = {
  MAIN: {
    width: 18,
    height: 19,
  },
  ROOM: {
    width: 31,
    height: 33,
  },
};

export const MAP_TILE_LAYER = `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`;
export const MAP_TILE_LAYER_ATTRIBUTION = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`;
