import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { showProgressBar, hideProgressBar } from '../../actions';

import Results from './Results';

const mapDispatchToProps = (dispatch) => ({
  showProgressBar: () => dispatch(showProgressBar()),
  hideProgressBar: () => dispatch(hideProgressBar())
});

export default connect(null, mapDispatchToProps)(withRouter(Results));
