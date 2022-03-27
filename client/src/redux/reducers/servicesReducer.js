import { INIT_SERVICES } from '../actionType/servicesAT';

const initialState = { services: [] };

export const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SERVICES:
      return { ...state, services: action.payload };

    default:
      return state;
  }
};
