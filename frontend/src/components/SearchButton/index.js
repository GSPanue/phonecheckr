import { memo } from 'react';
import { connect } from 'react-redux';

import { submitQuery } from '../../actions';

import SearchButton from './SearchButton';

const mapDispatchToProps = (dispatch) => ({
  submitQuery: () => dispatch(submitQuery())
});

export default connect(null, mapDispatchToProps)(memo(SearchButton));
