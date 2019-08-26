import { connect } from 'react-redux';

import {
  updateQuery,
  submitQuery
} from '../../actions';

import SearchInput from './SearchInput';

const mapStateToProps = ({ query }) => {
  const { currentQuery } = query;

  return ({
    value: currentQuery
  });
};

const mapDispatchToProps = (dispatch) => ({
  updateQuery: (query) => dispatch(updateQuery(query)),
  submitQuery: () => dispatch(submitQuery())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
