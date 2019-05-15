import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  showProgressBar,
  hideProgressBar,
  showResults,
  hideResults
} from '../../actions';

import Results from './Results';

const mapStateToProps = ({ results }) => {
  const { show } = results;

  return ({
    show
  });
};

const mapDispatchToProps = (dispatch) => ({
  showProgressBar: () => dispatch(showProgressBar()),
  hideProgressBar: () => dispatch(hideProgressBar()),
  showResults: () => dispatch(showResults()),
  hideResults: () => dispatch(hideResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Results));
