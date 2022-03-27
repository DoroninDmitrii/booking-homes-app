import { INIT_RESERVATIONS, DELETE_RESERVATIONS, UPDATE_RESERVATIONS } from '../actionType/reservationAT.js';

const initialState = { reservations: [] };

export const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_RESERVATIONS:
      return { ...state, reservations: action.payload };

    case DELETE_RESERVATIONS:
      return {
        ...state,
        reservations: state.reservations.filter((el) => el.id !== Number(action.payload.id)),
      };

    case UPDATE_RESERVATIONS:
      return {
        ...state,
        reservations: state.reservations.map((el) => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              dataIn: action.payload.dataIn,
              dataOut: action.payload.dataOut,
              summa: action.payload.summa,
              comment: action.payload.comment,
            };
          }
          return el;
        }),
      };

    default:
      return state;
  }
};
