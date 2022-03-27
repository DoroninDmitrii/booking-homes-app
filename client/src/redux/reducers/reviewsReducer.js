import { INIT_REVIEWS, CONFIRM_REVIEWS, ADD_REVIEW } from '../actionType/reviewsAT';

const initialState = { reviews: [] };

export function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_REVIEWS:
      return {
        ...state, reviews: action.payload,
      };
    case ADD_REVIEW:

      const newReview = {
        house_id: action.payload.house_id,
        nameUser: action.payload.nameUser,
        description: action.payload.description,
        rating: action.payload.rating,
        status: action.payload.status,
      };

      return {
        ...state, reviews: [...state.reviews, newReview],
      };

    case CONFIRM_REVIEWS:
      return {
        ...state,
        reviews: state.reviews.map((el) => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              description: action.payload.description,
              status: action.payload.status,
            };
          }
          return el;
        }),
      };

    default:
      return state;
  }
}
