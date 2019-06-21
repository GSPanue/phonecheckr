import { combineReducers } from 'redux';

import progressBar from './progressBar';
import query from './query';
import suggestions from './suggestions';
import results from './results';
import product from './product';

const reducer = combineReducers({
  progressBar,
  query,
  suggestions,
  results,
  product
});

export default reducer;
