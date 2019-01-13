import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, StyledText } from './styles';

const propTypes = {
  large: PropTypes.bool,
};

const defaultProps = {
  large: undefined,
};

const Logo = (props) => (
  <Wrapper {...props}>
    <StyledText primary>
      Phone
    </StyledText>
    <StyledText>
      Checkr
    </StyledText>
  </Wrapper>
);

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
