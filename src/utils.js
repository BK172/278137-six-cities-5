const ratingToInteger = (rating) => Math.round(rating);

export const getElementWidthByRating = (rating) => ratingToInteger(rating) * 20;

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const SortingTypes = {
  'popular': `Popular`,
  'to-high': `Price: low to high`,
  'to-low': `Price: high to low`,
  'top-rated': `Top rated first`
};

export const getSortedOffers = (offers, sortingType) => {
  switch (sortingType) {
    case `popular`:
      return offers.slice();
    case `to-high`:
      return offers.slice().sort((a, b) => a.price - b.price);
    case `to-low`:
      return offers.slice().sort((a, b) => b.price - a.price);
    case `top-rated`:
      return offers.slice().sort((a, b) => b.rating - a.rating);
  }

  return offers;
};
