import React from 'react';
import PropTypes from 'prop-types';

import {
  getParts,
  renderChildren
} from './helpers';

import { Wrapper } from './styles';

const propTypes = {
  label: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  isHighlighted: PropTypes.bool.isRequired
};

const SuggestionItem = ({ label, query, isHighlighted }) => {
  const parts = getParts(label, query);
  const children = renderChildren(parts);

  return (
    <Wrapper component="div" selected={isHighlighted}>
      <div>
        {children}
      </div>
    </Wrapper>
  );
};

SuggestionItem.propTypes = propTypes;

export default SuggestionItem;
