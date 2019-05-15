import { combineReducers } from 'redux';

import progressBar from './progressBar';
import query from './query';
import suggestions from './suggestions';

const reducer = combineReducers({
  progressBar,
  query,
  suggestions
});

export default reducer;
