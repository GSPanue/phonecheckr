import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  fetchResults,
  clearResults
} from '../../actions';

import Results from './Results';
import withLocation from '../../components/withLocation';

const mapStateToProps = ({ results }) => {
  const { searchResults, show } = results;

  return ({
    searchResults,
    show
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchResults: (query) => dispatch(fetchResults(query)),
  clearResults: () => dispatch(clearResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withLocation(Results)));
