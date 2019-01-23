import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func
};

const defaultProps = {
  placeholder: undefined,
  value: undefined,
  autoFocus: false,
  onChange: undefined
};

const Input = forwardRef((props, ref) => (
  <Wrapper {...props} inputRef={ref} />
));

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
