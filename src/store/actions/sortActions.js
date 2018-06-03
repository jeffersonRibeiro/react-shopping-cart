import { UPDATE_SORT } from './types';


export const updateSort = (sort) => dispatch => {

  dispatch({
    type: UPDATE_SORT,
    payload: sort,
  });

}
