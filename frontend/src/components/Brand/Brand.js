import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const propTypes = {
  children: PropTypes.string.isRequired
};

const Brand = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

Brand.propTypes = propTypes;

export default Brand;
