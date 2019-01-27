import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from './styles';
import Suggestion from '../Suggestion';
import SuggestionItem from '../SuggestionItem';

/**
 * Gets the suggestion's label.
 *
 * @param {object} suggestion - The suggestion.
 * @param {string} suggestion.label - The suggestion's label.
 *
 * @returns {string}
 */
const getSuggestionValue = ({ label }) => (
  label
);

/**
 * Renders an input component.
 *
 * @param {object} props - The input component's props
 *
 * @returns {ReactElement}
 */
const renderInputComponent = (props) => (
  <StyledInput {...props} />
);

const suggestionsContainerPropTypes = {
  containerProps: PropTypes.object.isRequired,
  children: PropTypes.bool.isRequired
};

/**
 * Renders a Suggestion component.
 *
 * @param {object} props - The suggestion component's props.
 * @param {object} props.containerProps - The container's props
 * @param {ReactElement} children - The suggestion component's children
 *
 * @returns {ReactElement}
 */
const renderSuggestionsContainer = ({ containerProps, children }) => {
  const suggestionProps = {
    ...containerProps
  };

  return (
    <Suggestion {...suggestionProps}>
      {children}
    </Suggestion>
  );
};

renderSuggestionsContainer.propTypes = suggestionsContainerPropTypes;

const suggestionPropTypes = {
  label: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired
};

/**
 * Renders a SuggestionItem component.
 *
 * @param {object} suggestion - The suggestion.
 * @param {string} suggestion.label - The suggestion's label.
 * @param {object} autosuggestProps - The autosuggest's props.
 *
 * @returns {ReactElement}
 */
const renderSuggestion = ({ label }, autosuggestProps) => {
  const itemProps = {
    label,
    ...autosuggestProps
  };

  return (
    <SuggestionItem {...itemProps} />
  );
};

renderSuggestion.propTypes = suggestionPropTypes;

export {
  getSuggestionValue,
  renderInputComponent,
  renderSuggestionsContainer,
  renderSuggestion
};
