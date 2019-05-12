import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const propTypes = {
  children: PropTypes.node.isRequired
};

const Content = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    {children}
  </Wrapper>
);

Content.propTypes = propTypes;

export default Content;
