import {
  SHOW_RESULTS,
  HIDE_RESULTS
} from '../../constants';

const initialState = {
  show: false
};

const results = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_RESULTS:
      return ({
        ...state,
        show: true
      });

    case HIDE_RESULTS:
      return ({
        ...state,
        show: false
      });

    default:
      return (
        state
      );
  }
};

export default results;
