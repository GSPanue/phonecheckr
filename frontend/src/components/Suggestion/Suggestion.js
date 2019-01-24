import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

import { Wrapper } from './styles';

const propTypes = {
  children: PropTypes.element
};

const defaultProps = {
  children: undefined
};

const Suggestion = forwardRef(({ children, ...rest }, ref) => (
  <Wrapper ref={ref}>
    <Paper {...rest} elevation={0} square>
      {children}
    </Paper>
  </Wrapper>
));

Suggestion.propTypes = propTypes;
Suggestion.defaultProps = defaultProps;

export default Suggestion;
