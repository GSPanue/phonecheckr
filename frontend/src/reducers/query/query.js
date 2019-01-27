import {
  UPDATE_QUERY,
  SUBMIT_QUERY,
  REVOKE_SUBMIT_QUERY,
  CLEAR_QUERY
} from '../../constants';

const initialState = {
  currentQuery: '',
  submitted: false
};

const query = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return ({
        ...state,
        currentQuery: action.payload
      });

    case SUBMIT_QUERY:
      return ({
        ...state,
        submitted: true
      });

    case REVOKE_SUBMIT_QUERY:
      return ({
        ...state,
        submitted: false
      });

    case CLEAR_QUERY:
      return ({
        ...state,
        currentQuery: '',
        submitted: false
      });

    default:
      return (
        state
      );
  }
};

export default query;
