import React from 'react';
import PropTypes from 'prop-types';

import { StyledSearchIcon } from './styles';
import IconButton from '../IconButton';

const propTypes = {
  submitQuery: PropTypes.func.isRequired
};

const SearchButton = ({ submitQuery, ...rest }) => (
  <IconButton {...rest} onClick={submitQuery}>
    <StyledSearchIcon />
  </IconButton>
);

SearchButton.propTypes = propTypes;

export default SearchButton;
