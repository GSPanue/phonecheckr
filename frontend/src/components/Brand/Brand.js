import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink } from './styles';

const propTypes = {
  children: PropTypes.string.isRequired
};

const Brand = ({ children }) => (
  <StyledLink to="/">
    {children}
  </StyledLink>
);

Brand.propTypes = propTypes;

export default Brand;
