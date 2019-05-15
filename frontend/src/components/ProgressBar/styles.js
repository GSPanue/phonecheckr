import React from 'react';
import styled from 'styled-components';

import LinearProgress from '@material-ui/core/LinearProgress';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  margin-top: 57px;

  @media (min-width: 600px) {
    margin-top: 65px;
  }
`;

const StyledLinearProgress = styled((props) => (
  <LinearProgress classes={{ bar: 'bar' }} {...props} />
))`
  && {
    height: 3px;
    background-color: ${({ theme: { progressBar } }) => (progressBar.primaryColor)};
  }

  & .bar {
    background-color: ${({ theme: { progressBar } }) => (progressBar.secondaryColor)};
  }
`;

export {
  Wrapper,
  StyledLinearProgress
};
