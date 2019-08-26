import { combineReducers } from 'redux';

import history from './history';
import progressBar from './progressBar';
import query from './query';
import results from './results';
import product from './product';

const reducer = combineReducers({
  history,
  progressBar,
  query,
  results,
  product
});

export default reducer;
