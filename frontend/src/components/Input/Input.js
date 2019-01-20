import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const propTypes = {
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func
};

const defaultProps = {
  placeholder: undefined,
  autoFocus: false,
  onChange: undefined
};

const Input = (props) => (
  <Wrapper {...props} />
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
