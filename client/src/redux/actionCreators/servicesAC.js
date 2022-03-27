import { INIT_SERVICES } from '../actionType/servicesAT';

export const initServicesAC = (payload) => ({
  type: INIT_SERVICES,
  payload,
});
