import React from 'react';
import PropTypes from 'prop-types';

import { StyledSearchIcon } from './styles';
import IconButton from '../IconButton';

const propTypes = {
  onClick: PropTypes.func
};

const defaultProps = {
  onClick: undefined
};

const SearchButton = (props) => (
  <IconButton {...props}>
    <StyledSearchIcon />
  </IconButton>
);

SearchButton.propTypes = propTypes;
SearchButton.defaultProps = defaultProps;

export default SearchButton;
