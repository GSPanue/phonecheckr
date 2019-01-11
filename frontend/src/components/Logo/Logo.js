import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, StyledFont } from './styles';

const propTypes = {
  size: PropTypes.string
};

const defaultProps = {
  size: '20px'
};

const Logo = (props) => (
  <Wrapper {...props}>
    <StyledFont primary>
      Price
    </StyledFont>
    <StyledFont>
      Checkr
    </StyledFont>
  </Wrapper>
);

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
