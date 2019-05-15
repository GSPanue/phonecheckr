import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, StyledLinearProgress } from './styles';

const propTypes = {
  hide: PropTypes.bool.isRequired
};

const ProgressBar = (props) => (
  <Wrapper {...props}>
    <StyledLinearProgress />
  </Wrapper>
);

ProgressBar.propTypes = propTypes;

export default ProgressBar;
