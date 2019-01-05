import { UPDATE_FILTER } from './actionTypes';

export const updateFilters = filters => ({
  type: UPDATE_FILTER,
  payload: filters
});
