import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const propTypes = {
  children: PropTypes.element.isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired
};

const Link = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    {children}
  </Wrapper>
);

Link.propTypes = propTypes;

export default Link;
