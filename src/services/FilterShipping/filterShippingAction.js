import { UPDATE_SHIPPING } from './filterShippingActionTypes';

export const updateShipping = shipping => ({
  type: UPDATE_SHIPPING,
  payload: shipping
});
