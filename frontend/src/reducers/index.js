import { combineReducers } from 'redux';

import progressBar from './progressBar';
import query from './query';
import suggestions from './suggestions';
import results from './results';

const reducer = combineReducers({
  progressBar,
  query,
  suggestions,
  results
});

export default reducer;
