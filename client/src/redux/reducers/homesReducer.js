import {
  DELETE_HOME, INIT_HOMES, ADD_HOUSE, EDIT_HOUSE, GET_ONE_HOUSE,
} from '../actionType/homesAT';

const initialState = { homes: [], oneHome: [] };

export const homesReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_HOMES:
      return { ...state, homes: action.payload };

    case DELETE_HOME:
      return { ...state, homes: state.homes.filter((el) => el.id !== +action.payload) };

    case ADD_HOUSE:
      return {
        ...state, homes: [...state.homes, action.payload],
      };

    case GET_ONE_HOUSE:
      return {
        ...state, oneHome: action.payload,
      };

    case EDIT_HOUSE:
      return {
        ...state,
        homes: state.homes.map((el) => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              name: action.payload.name,
              description: action.payload.description,
              price: action.payload.price,
            };
          }
          return el;
        }),
      };

    default:
      return state;
  }
};
