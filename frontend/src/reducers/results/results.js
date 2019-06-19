import {
  SHOW_RESULTS,
  HIDE_RESULTS
} from '../../constants';

const initialState = {
  results: null,
  show: false
};

const results = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_RESULTS:
      return ({
        ...state,
        results: action.payload,
        show: true
      });

    case HIDE_RESULTS:
      return ({
        ...state,
        results: null,
        show: false
      });

    default:
      return (
        state
      );
  }
};

export default results;
