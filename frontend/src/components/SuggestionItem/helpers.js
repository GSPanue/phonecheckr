import React from 'react';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import shortid from 'shortid';

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
 * @param {objects} parts - The parts of the label.
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

export {
  getParts,
  renderChildren
};
