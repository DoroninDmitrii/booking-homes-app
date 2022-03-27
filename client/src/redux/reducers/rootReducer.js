import { combineReducers } from 'redux';
import { adminReducer } from './adminReducer';
import { reviewsReducer } from './reviewsReducer';
import { homesReducer } from './homesReducer';
import { servicesReducer } from './servicesReducer';
import { orderReducer } from './orderReducer';
import { reservationsReducer } from './reservationsReducer';

export const rootReducer = combineReducers({
  adminReducer,
  homesReducer,
  reviewsReducer,
  servicesReducer,
  orderReducer,
  reservationsReducer,
});
