import { INIT_RESERVATIONS, DELETE_RESERVATIONS, UPDATE_RESERVATIONS } from '../actionType/reservationAT';

export const initReservationsAC = (payload) => ({
  type: INIT_RESERVATIONS,
  payload,
});

export const deleteReservationsAC = (payload) => ({
  type: DELETE_RESERVATIONS,
  payload,
});

export const updateReservationsAC = (payload) => ({
  type: UPDATE_RESERVATIONS,
  payload,
});
