import { LOGIN_ADMIN, LOGOUT, ERROR_LOGIN } from '../actionType/adminAT';

const initialState = { admin: [] };
export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ADMIN:
      return {
        ...state, admin: action.payload,
      };
    case LOGOUT:
      return {
        ...state, admin: action.payload,
      };

    case ERROR_LOGIN:
      return {
        ...state, admin: action.payload,
      };

    default:
      return state;
  }
};
