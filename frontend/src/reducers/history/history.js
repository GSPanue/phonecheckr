import {
  SET_CURRENT_LOCATION,
  SET_PREVIOUS_LOCATION
} from '../../constants';

const initialState = {
  currentLocation: null,
  previousLocation: null
};

const history = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_LOCATION:
      return ({
        ...state,
        currentLocation: action.payload
      });

    case SET_PREVIOUS_LOCATION:
      return ({
        ...state,
        previousLocation: state.currentLocation,
        currentLocation: null
      });

    default:
      return (
        state
      );
  }
};

export default history;
