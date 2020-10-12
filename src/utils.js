export const ratingToInteger = (rating) => Math.round(rating) * 20;

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
