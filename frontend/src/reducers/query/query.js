import {
  UPDATE_QUERY
} from '../../constants';

const initialState = {
  query: ''
};

const query = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return ({
        ...state,
        query: action.payload
      });

    default:
      return (
        state
      );
  }
};

export default query;
