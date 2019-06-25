import {
  CHANGE_LOCATION
} from '../../constants';

const changeLocation = (location) => ({
  type: CHANGE_LOCATION,
  payload: location
});

export {
  changeLocation
};
