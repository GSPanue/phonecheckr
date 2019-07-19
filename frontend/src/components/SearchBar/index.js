import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { clearQuery, revokeSubmitQuery, clearResults } from '../../actions';

import SearchBar from './SearchBar';

const mapStateToProps = ({ query }) => {
  const { currentQuery, submitted } = query;

  return ({
    value: currentQuery,
    submitted
  });
};

const mapDispatchToProps = (dispatch) => ({
  revokeSubmitQuery: () => dispatch(revokeSubmitQuery()),
  clearQuery: () => dispatch(clearQuery()),
  clearResults: () => dispatch(clearResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchBar));
