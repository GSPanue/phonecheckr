import {
  SHOW_RESULTS,
  HIDE_RESULTS
} from '../../constants';

const initialState = {
  searchResults: null,
  show: false
};

const results = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_RESULTS:
      return ({
        ...state,
        searchResults: action.payload,
        show: true
      });

    case HIDE_RESULTS:
      return ({
        ...state,
        searchResults: null,
        show: false
      });

    default:
      return (
        state
      );
  }
};

export default results;
