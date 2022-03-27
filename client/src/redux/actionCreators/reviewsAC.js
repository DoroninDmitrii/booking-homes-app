import { INIT_REVIEWS, CONFIRM_REVIEWS, ADD_REVIEW } from '../actionType/reviewsAT';

export const initReviews = (payload) => ({
  type: INIT_REVIEWS,
  payload,
});

export const addReviews = (payload) => ({
  type: ADD_REVIEW,
  payload,
});

export const confirmReviewsAC = (payload) => ({
  type: CONFIRM_REVIEWS,
  payload,
});
