import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import SearchInput from '../SearchInput';
import SearchButton from '../SearchButton';

const propTypes = {
  value: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
  autosuggest: PropTypes.bool,
  history: PropTypes.object.isRequired,
  revokeSubmitQuery: PropTypes.func.isRequired,
  clearQuery: PropTypes.func.isRequired
};

const defaultProps = {
  autosuggest: false
};

class SearchBar extends Component {
  /**
   * Indicates whether the results screen should be navigated to.
   *
   * @param {string} - The query.
   *
   * @returns {boolean}
   */
  static shouldNavigateToResults(query) {
    return (
      query.length > 0
    );
  }

  constructor(props) {
    super(props);

    this.navigate = this.navigate.bind(this);
  }

  shouldComponentUpdate({ submitted }) {
    return (
      submitted
    );
  }

  componentDidUpdate() {
    const { submitted } = this.props;

    if (submitted) {
      this.navigate();
    }
  }

  /**
   * Navigates to the results screen when a non-empty query has been submitted.
   *
   * @returns {void}
   */
  navigate() {
    const {
      value,
      history,
      revokeSubmitQuery,
      clearQuery
    } = this.props;

    const query = value.trim();

    const shouldNavigateToResults = SearchBar.shouldNavigateToResults(query);

    if (shouldNavigateToResults) {
      history.push({
        pathname: '/results',
        search: `q=${query}`
      });

      clearQuery();
    }

    revokeSubmitQuery();
  }

  render() {
    const { autosuggest } = this.props;

    return (
      <Wrapper>
        <SearchInput autosuggest={autosuggest} />
        <SearchButton />
      </Wrapper>
    );
  }
}

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
