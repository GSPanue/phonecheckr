import {
  SET_CURRENT_LOCATION,
  SET_PREVIOUS_LOCATION
} from '../../constants';

const setCurrentLocation = (location) => ({
  type: SET_CURRENT_LOCATION,
  payload: location
});

const setPreviousLocation = () => ({
  type: SET_PREVIOUS_LOCATION
});

export {
  setCurrentLocation,
  setPreviousLocation
};
