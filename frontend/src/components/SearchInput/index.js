import { connect } from 'react-redux';

import {
  updateQuery,
  submitQuery,
  fetchSuggestions,
  clearSuggestions
} from '../../actions';

import SearchInput from './SearchInput';

const mapStateToProps = ({ query, suggestions }, { autosuggest }) => {
  const { currentQuery } = query;

  if (autosuggest) {
    const { currentSuggestions } = suggestions;

    return ({
      value: currentQuery,
      suggestions: currentSuggestions
    });
  }

  return ({
    value: currentQuery
  });
};

const mapDispatchToProps = (dispatch, { autosuggest }) => {
  let actions = {
    updateQuery: (query) => dispatch(updateQuery(query)),
    submitQuery: () => dispatch(submitQuery()),
  };

  if (autosuggest) {
    actions = {
      ...actions,
      ...{
        fetchSuggestions: (query) => dispatch(fetchSuggestions(query)),
        clearSuggestions: () => dispatch(clearSuggestions())
      }
    };
  }

  return (
    actions
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
