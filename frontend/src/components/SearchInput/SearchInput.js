import React, { useCallback } from 'react';
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
  autoFocus: PropTypes.bool,
  value: PropTypes.string.isRequired,
  suggestions: PropTypes.array,
  autosuggest: PropTypes.bool,
  updateQuery: PropTypes.func.isRequired,
  submitQuery: PropTypes.func.isRequired,
  fetchSuggestions: PropTypes.func,
  clearSuggestions: PropTypes.func
};

const defaultProps = {
  autoFocus: false,
  suggestions: undefined,
  autosuggest: false,
  fetchSuggestions: undefined,
  clearSuggestions: undefined
};

const SearchInput = ({
  autoFocus,
  autosuggest,
  value,
  suggestions,
  fetchSuggestions,
  clearSuggestions,
  updateQuery,
  submitQuery
}) => {
  /**
   * Dispatches an action to update the query value and will submit
   * the query if autosuggest is enabled and a suggestion is clicked.
   *
   * @param {object} event - The event.
   * @param {object} autosuggestEvent - The autosuggest event.
   *
   * @returns {void}
   */
  const handleChange = useCallback((event, autosuggestEvent) => {
    if (autosuggest) {
      const { newValue, method } = autosuggestEvent;
      const hasClickedSuggestion = (method === 'click');

      updateQuery(newValue);

      if (hasClickedSuggestion) {
        submitQuery();
      }
    }
    else {
      const { target: { value: newValue } } = event;

      updateQuery(newValue);
    }
  }, []);

  /**
   * Submits the query when the enter key is pressed.
   *
   * @param {object} event - The event.
   * @param {string} event.key - The key that triggered the event.
   *
   * @returns {void}
   */
  const handleKeyPress = useCallback(({ key }) => {
    const hasPressedEnter = (key === 'Enter');

    if (hasPressedEnter) {
      submitQuery();
    }
  }, []);

  /**
   * Dispatches an action to fetch suggestions.
   *
   * @param {object} autosuggestEvent - The autosuggest event.
   * @param {string} autosuggestEvent.value - The value of the input field.
   *
   * @returns {void}
   */
  const handleSuggestionsFetchRequested = useCallback(({ value: newValue }) => {
    fetchSuggestions(newValue);
  }, []);

  /**
   * Dispatches an action to clear the suggestions.
   *
   * @returns {void}
   */
  const handleSuggestionsClearRequested = useCallback(() => {
    clearSuggestions();
  }, []);

  const inputProps = {
    placeholder: 'Search for product...',
    value,
    onChange: handleChange,
    onKeyPress: handleKeyPress,
    autoFocus
  };

  if (autosuggest) {
    const autosuggestProps = {
      suggestions,
      getSuggestionValue,
      renderSuggestionsContainer,
      renderSuggestion,
      renderInputComponent,
      inputProps,
      onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: handleSuggestionsClearRequested
    };

    return (
      <Autosuggest {...autosuggestProps} />
    );
  }

  return (
    <StyledInput
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      {...inputProps}
    />
  );
};

SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;

export default SearchInput;
