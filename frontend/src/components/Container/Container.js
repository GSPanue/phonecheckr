import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

const Container = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

Container.propTypes = propTypes;

export default Container;
