import {
  GET_FREE_HOUSE, SAVE_INTERVAL, DELETE_INTERVAL, INIT_UNAVALIBLE_DATE,
} from '../actionType/orderAT';

const initialState = { orders: [], interval: [], unavalibleDate: [] };

export function orderReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FREE_HOUSE:
      return {
        ...state, orders: action.payload,
      };
    case SAVE_INTERVAL:
      return {
        ...state, interval: action.payload,
      };
    case DELETE_INTERVAL:
      return {
        ...state, interval: action.payload,
      };
    case INIT_UNAVALIBLE_DATE:
      return {
        ...state, unavalibleDate: action.payload,
      };

    default:
      return state;
  }
}
