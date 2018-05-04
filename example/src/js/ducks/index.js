import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { bathroom } from 'bathroom';
import * as usersDuck from './users';

const {
  store,
  users,
} = bathroom({
  users: usersDuck,
}, createStore, {}, compose(
  applyMiddleware(
    createLogger()
  )
));

export {
  store,
  users,
};
