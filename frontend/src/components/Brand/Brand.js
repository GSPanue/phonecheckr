import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink } from './styles';
import Logo from '../Logo';

const propTypes = {
  large: PropTypes.bool
};

const defaultProps = {
  large: undefined
};

const Brand = (props) => (
  <StyledLink to="/">
    <Logo {...props} />
  </StyledLink>
);

Brand.propTypes = propTypes;
Brand.defaultProps = defaultProps;

export default Brand;
