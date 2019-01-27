import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

import {
  getSuggestionValue,
  renderInputComponent,
  renderSuggestionsContainer,
  renderSuggestion
} from './helpers';

import { StyledInput } from './styles';

const propTypes = {
  value: PropTypes.string.isRequired,
  suggestions: PropTypes.array,
  autosuggest: PropTypes.bool,
  updateQuery: PropTypes.func.isRequired,
  submitQuery: PropTypes.func.isRequired,
  fetchSuggestions: PropTypes.func,
  clearSuggestions: PropTypes.func
};

const defaultProps = {
  suggestions: undefined,
  autosuggest: false,
  fetchSuggestions: undefined,
  clearSuggestions: undefined
};

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    if (props.autosuggest) {
      this.handleSuggestionsFetchRequested = this.handleSuggestionsFetchRequested.bind(this);
      this.handleSuggestionsClearRequested = this.handleSuggestionsClearRequested.bind(this);
    }
    else {
      this.handleSuggestionsFetchRequested = undefined;
      this.handleSuggestionsClearRequested = undefined;
    }
  }

  /**
   * Dispatches an action to update the query value, and will submit
   * the query if autosuggest is enabled and a suggestion is clicked.
   *
   * @param {object} event - The event.
   * @param {object} autosuggestEvent - The autosuggest event.
   *
   * @returns {void}
   */
  handleChange(event, autosuggestEvent) {
    const { autosuggest, updateQuery, submitQuery } = this.props;

    if (autosuggest) {
      const { newValue, method } = autosuggestEvent;
      const hasClickedSuggestion = (method === 'click');

      updateQuery(newValue);

      if (hasClickedSuggestion) {
        submitQuery();
      }
    }
    else {
      const { target: { value } } = event;

      updateQuery(value);
    }
  }

  /**
   * Submits the query when the enter key is pressed.
   *
   * @param {object} event - The event.
   * @param {string} event.key - The key that triggered the event.
   *
   * @returns {void}
   */
  handleKeyPress({ key }) {
    const { submitQuery } = this.props;
    const hasPressedEnter = (key === 'Enter');

    if (hasPressedEnter) {
      submitQuery();
    }
  }

  /**
   * Dispatches an action to fetch suggestions.
   *
   * @param {object} autosuggestEvent - The autosuggest event.
   * @param {string} autosuggestEvent.value - The value of the input field.
   *
   * @returns {void}
   */
  handleSuggestionsFetchRequested({ value }) {
    const { fetchSuggestions } = this.props;

    fetchSuggestions(value);
  }

  /**
   * Dispatches an action to clear the suggestions.
   *
   * @returns {void}
   */
  handleSuggestionsClearRequested() {
    const { clearSuggestions } = this.props;

    clearSuggestions();
  }

  render() {
    const { autosuggest, value, suggestions } = this.props;

    const inputProps = {
      placeholder: 'Search for product...',
      value,
      onChange: this.handleChange,
      onKeyPress: this.handleKeyPress,
      autoFocus: true
    };

    if (autosuggest) {
      const autosuggestProps = {
        suggestions,
        getSuggestionValue,
        renderSuggestionsContainer,
        renderSuggestion,
        renderInputComponent,
        inputProps,
        onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.handleSuggestionsClearRequested
      };

      return (
        <Autosuggest {...autosuggestProps} />
      );
    }

    return (
      <StyledInput
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        {...inputProps}
      />
    );
  }
}

SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;

export default SearchInput;
