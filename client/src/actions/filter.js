import {SET_PRICES_FILTER} from './types/prices-types';

export const setFilter = filter => ({
   type: SET_PRICES_FILTER,
   payload: filter,
});