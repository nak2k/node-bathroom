import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Application } from './Application';
import { store } from './ducks';

render(
  <Provider store={store}>
    <Application className="Application" />
  </Provider>,
  document.getElementById('app'));
