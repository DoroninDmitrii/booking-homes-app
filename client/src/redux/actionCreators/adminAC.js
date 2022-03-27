import { LOGIN_ADMIN, LOGOUT, ERROR_LOGIN } from '../actionType/adminAT';

export const loginAdminAC = (payload) => ({
  type: LOGIN_ADMIN,
  payload,
});

export const logoutAdminAC = (payload) => ({
  type: LOGOUT,
  payload,
});

export const errorLoginAdminAC = (payload) => ({
  type: ERROR_LOGIN,
  payload,
});
