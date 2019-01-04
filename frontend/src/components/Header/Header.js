import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import Container from '../Container';
import NavBar from '../NavBar';

const propTypes = {
  fixed: PropTypes.bool,
  borderless: PropTypes.bool
};

const defaultProps = {
  fixed: false,
  borderless: false
};

const Header = (props) => (
  <Wrapper {...props}>
    <Container>
      <NavBar
        brandName="PhoneCheckr"
      />
    </Container>
  </Wrapper>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
