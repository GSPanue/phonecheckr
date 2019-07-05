import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, StyledText } from './styles';

const propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

const Range = ({ from, to }) => (
  <Wrapper>
    <span>From</span>
    <StyledText>
      {` £${from} `}
    </StyledText>
    <span>to</span>
    <StyledText>
      {` £${to} `}
    </StyledText>
  </Wrapper>
);

Range.propTypes = propTypes;

export default Range;
