import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

import {
  getSuggestions,
  getSuggestionValue,
  renderInputComponent,
  renderSuggestionsContainer,
  renderSuggestion
} from './helpers';

import { Wrapper } from './styles';
import SearchButton from '../SearchButton';

const propTypes = {
  history: PropTypes.object.isRequired
};

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSuggestionsFetchRequested = this.handleSuggestionsFetchRequested.bind(this);
    this.handleSuggestionsClearRequested = this.handleSuggestionsClearRequested.bind(this);

    this.state = {
      value: '',
      suggestions: []
    };
  }

  /**
   * Navigates to the results screen.
   *
   * @returns {void}
   */
  handleClick() {
    this.navigateToResults();
  }

  /**
   * Sets the value property in state with the new value of the input field
   * and will navigate to the results screen if a suggestion is clicked.
   *
   * @param {object} event - The event.
   * @param {object} autosuggestEvent - The autosuggest event.
   * @param {string} autosuggestEvent.newValue - The new value of the input field.
   * @param {string} autosuggestEvent.method - The method used to make the change.
   *
   * @returns {void}
   */
  handleChange(event, { newValue: value, method }) {
    const hasClickedSuggestion = (method === 'click');

    this.setState({
      value
    }, () => {
      if (hasClickedSuggestion) {
        this.navigateToResults();
      }
    });
  }

  /**
   * Navigates to the results screen when the enter key has been pressed.
   *
   * @param {object} event - The event.
   * @param {string} event.key - The key that triggered the event.
   *
   * @returns {void}
   */
  handleKeyPress({ key }) {
    const hasPressedEnter = (key === 'Enter');

    if (hasPressedEnter) {
      this.navigateToResults();
    }
  }

  /**
   * Sets the suggestions property in state with an array containing suggestions.
   *
   * @param {object} autosuggestEvent - The autosuggest event.
   * @param {string} autosuggestEvent.value - The value of the input field.
   *
   * @returns {void}
   */
  handleSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(value)
    });
  }

  /**
   * Sets the suggestions property in state with an empty array.
   *
   * @returns {void}
   */
  handleSuggestionsClearRequested() {
    const { suggestions } = this.state;

    const shouldClearSuggestions = (suggestions.length > 0);

    if (shouldClearSuggestions) {
      this.setState({
        suggestions: []
      });
    }
  }

  /**
   * Navigates to the results screen if a query exists.
   *
   * @returns {void}
   */
  navigateToResults() {
    const { history } = this.props;
    const { value: query } = this.state;

    const shouldNavigate = (query.trim().length > 0);

    if (shouldNavigate) {
      history.push({
        pathname: '/results',
        search: `q=${query}`
      });
    }
  }

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Search for product...',
      value,
      onChange: this.handleChange,
      onKeyPress: this.handleKeyPress,
      autoFocus: true
    };

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
      <Wrapper>
        <Autosuggest {...autosuggestProps} />
        <SearchButton onClick={this.handleClick} />
      </Wrapper>
    );
  }
}

SearchBar.propTypes = propTypes;

export default SearchBar;
