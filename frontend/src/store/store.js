import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import reducer from '../reducers';

let middleware = [];

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  middleware = [
    ...middleware,
    logger
  ];
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

export default store;
