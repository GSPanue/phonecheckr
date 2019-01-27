import { combineReducers } from 'redux';

import query from './query';
import suggestions from './suggestions';

const reducer = combineReducers({
  query,
  suggestions
});

export default reducer;
