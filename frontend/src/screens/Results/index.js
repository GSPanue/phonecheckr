import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  fetchResults,
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
  fetchResults: (query) => dispatch(fetchResults(query)),
  hideResults: () => dispatch(hideResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Results));
