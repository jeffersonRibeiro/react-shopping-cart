import { UPDATE_FILTER } from './types';


export const updateFilters = (filters) => dispatch => {

  dispatch({
    type: UPDATE_FILTER,
    payload: filters,
  });

}
