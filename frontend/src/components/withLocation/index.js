import { compose } from 'redux';
import { connect } from 'react-redux';

import { setCurrentLocation, setPreviousLocation } from '../../actions';

import withLocation from './withLocation';

const mapDispatchToProps = (dispatch) => ({
  setCurrentLocation: (location) => dispatch(setCurrentLocation(location)),
  setPreviousLocation: () => dispatch(setPreviousLocation())
});

const composedWithLocation = compose(
  connect(null, mapDispatchToProps),
  withLocation
);

export default composedWithLocation;
