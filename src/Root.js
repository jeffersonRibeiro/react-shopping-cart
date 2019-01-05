import React from 'react';
import { Provider } from 'react-redux';

import store from './services/store';

const Root = ({ children, initialState = {} }) => (
  <Provider store={store(initialState)}>{children}</Provider>
);

export default Root;
