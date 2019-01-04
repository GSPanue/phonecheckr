import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import Brand from '../Brand';

const propTypes = {
  brandName: PropTypes.string.isRequired
};

const NavBar = ({ brandName }) => (
  <Wrapper>
    <Brand>
      {brandName}
    </Brand>
  </Wrapper>
);

NavBar.propTypes = propTypes;

export default NavBar;
