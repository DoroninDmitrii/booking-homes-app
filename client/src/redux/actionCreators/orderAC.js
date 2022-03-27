import {
  GET_FREE_HOUSE, SAVE_INTERVAL, DELETE_INTERVAL, INIT_UNAVALIBLE_DATE,
} from '../actionType/orderAT';

export const getFreeHouseAC = (payload) => ({
  type: GET_FREE_HOUSE,
  payload,
});

export const saveInterval = (payload) => ({
  type: SAVE_INTERVAL,
  payload,
});

export const deleteInterval = (payload) => ({
  type: DELETE_INTERVAL,
  payload,
});

export const initUnavalibleDate = (payload) => ({
  type: INIT_UNAVALIBLE_DATE,
  payload,
});
