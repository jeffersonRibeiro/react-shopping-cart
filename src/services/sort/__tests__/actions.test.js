import * as actions from '../actions';
import * as types from '../actionTypes';

describe('sort actions', () => {
  it('should return expected payload', () => {
    const text = 'lowestprice';

    const expectedAction = {
      type: types.UPDATE_SORT,
      payload: text
    };

    expect(actions.updateSort(text)).toEqual(expectedAction);
  });
});
