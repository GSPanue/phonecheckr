import {
  FETCH_SUGGESTIONS,
  CLEAR_SUGGESTIONS
} from '../../constants';

const initialState = {
  currentSuggestions: []
};

const suggestions = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUGGESTIONS:
      return ({
        ...state,
        currentSuggestions: action.payload
      });

    case CLEAR_SUGGESTIONS:
      return ({
        ...state,
        currentSuggestions: []
      });

    default:
      return (
        state
      );
  }
};

export default suggestions;
