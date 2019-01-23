import React from 'react';
import PropTypes from 'prop-types';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import shortid from 'shortid';
import MenuItem from '@material-ui/core/MenuItem';

import { StyledText } from './styles';

/**
 * Calculates the part of the label to highlight based on the query and breaks the label into parts.
 *
 * @param {string} label - The label.
 * @param {string} query - The query.
 *
 * @returns {object}
 */
const getParts = (label, query) => {
  const matches = match(label, query);
  const parts = parse(label, matches);

  return (
    parts
  );
};

/**
 * Wraps each part of the label in a StyledText component.
 *
 * @param {objects} parts - The parts of a label.
 *
 * @returns {array}
 */
const renderChildren = (parts) => (
  parts.map(({ text, highlight: bold }) => {
    const key = shortid.generate();

    const textProps = {
      key,
      bold
    };

    return (
      <StyledText {...textProps}>
        {text}
      </StyledText>
    );
  })
);

const propTypes = {
  label: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired
};

const SuggestionItem = ({ label, query }) => {
  const parts = getParts(label, query);
  const children = renderChildren(parts);

  return (
    <MenuItem component="div">
      <div>
        {children}
      </div>
    </MenuItem>
  );
};

SuggestionItem.propTypes = propTypes;

export default SuggestionItem;
