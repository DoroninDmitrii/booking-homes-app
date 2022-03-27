import {
  INIT_HOMES, DELETE_HOME, EDIT_HOUSE, ADD_HOUSE_FETCH, ADD_HOUSE, GET_ONE_HOUSE,
} from '../actionType/homesAT';

export const initHomesAC = (payload) => ({
  type: INIT_HOMES,
  payload,
});

export const deleteHomeAC = (payload) => ({
  type: DELETE_HOME,
  payload,
});

export const addHouseAdminFetchAC = (payload) => ({
  type: ADD_HOUSE_FETCH,
  payload,
});

export const addHouseAdminAC = (payload) => ({
  type: ADD_HOUSE,
  payload,
});

export const editHouseAdminAC = (payload) => ({
  type: EDIT_HOUSE,
  payload,
});

export const initOneHouseAC = (payload) => ({
  type: GET_ONE_HOUSE,
  payload,
});
