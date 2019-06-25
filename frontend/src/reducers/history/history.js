import {
  CHANGE_LOCATION
} from '../../constants';

const initialState = {
  prevLocation: null
};

const history = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOCATION:
      return ({
        ...state,
        prevLocation: action.payload
      });

    default:
      return (
        state
      );
  }
};

export default history;
