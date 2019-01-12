import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, StyledText } from './styles';

const propTypes = {
  size: PropTypes.string
};

const defaultProps = {
  size: '20px'
};

const Logo = (props) => (
  <Wrapper {...props}>
    <StyledText primary>
      Price
    </StyledText>
    <StyledText>
      Checkr
    </StyledText>
  </Wrapper>
);

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
