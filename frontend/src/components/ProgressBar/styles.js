import React from 'react';
import styled from 'styled-components';

import LinearProgress from '@material-ui/core/LinearProgress';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  margin-top: 56px;

  ${({ hide }) => (hide) && (`
    display: none;
  `)}

  @media (min-width: 0px) and (orientation: landscape) {
    margin-top: 48px;
  }

  @media (min-width: 600px) {
    margin-top: 64px;
  }
`;

const StyledLinearProgress = styled((props) => (
  <LinearProgress classes={{ bar: 'bar' }} {...props} />
))`
  && {
    height: 3px;
  }

  & .bar {
    background-color: ${({ theme: { progressBar } }) => (progressBar.primaryColor)};
  }
`;

export {
  Wrapper,
  StyledLinearProgress
};
