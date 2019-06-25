import { compose } from 'redux';
import { connect } from 'react-redux';

import { changeLocation } from '../../actions';

import withLocation from './withLocation';

const mapDispatchToProps = (dispatch) => ({
  changeLocation: (location) => dispatch(changeLocation(location))
});

const composedWithLocation = compose(
  connect(null, mapDispatchToProps),
  withLocation
);

export default composedWithLocation;
