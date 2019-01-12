import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const propTypes = {
  children: PropTypes.element.isRequired,
  viewBox: PropTypes.string
};

const defaultProps = {
  viewBox: undefined
};

const Svg = ({ children, ...rest }) => (
  <Wrapper
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    {children}
  </Wrapper>
);

Svg.propTypes = propTypes;
Svg.defaultProps = defaultProps;

export default Svg;
