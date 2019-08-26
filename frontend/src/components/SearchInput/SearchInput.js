import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from './styles';

const propTypes = {
  autoFocus: PropTypes.bool,
  value: PropTypes.string.isRequired,
  updateQuery: PropTypes.func.isRequired,
  submitQuery: PropTypes.func.isRequired
};

const defaultProps = {
  autoFocus: false
};

const SearchInput = ({
  autoFocus,
  value,
  updateQuery,
  submitQuery
}) => {
  /**
   * Dispatches an action to update the query value.
   *
   * @param {object} event - The event.
   *
   * @returns {void}
   */
  const handleChange = useCallback((event) => {
    const { target: { value: newValue } } = event;

    updateQuery(newValue);
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

  const inputProps = {
    placeholder: 'Search for product...',
    value,
    onChange: handleChange,
    onKeyPress: handleKeyPress,
    autoFocus
  };

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
