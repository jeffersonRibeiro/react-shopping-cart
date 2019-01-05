import * as actions from '../actions';
import * as types from '../actionTypes';

describe('filter actions', () => {
  it('should return expected payload', () => {
    const text = '42';

    const expectedAction = {
      type: types.UPDATE_FILTER,
      payload: text
    };

    expect(actions.updateFilters(text)).toEqual(expectedAction);
  });
});
