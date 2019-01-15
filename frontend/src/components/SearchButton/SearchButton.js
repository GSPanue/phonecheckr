import React from 'react';
import PropTypes from 'prop-types';
import { default as Wrapper } from '@material-ui/core/IconButton';

import { Icon } from './styles';

const propTypes = {
  onClick: PropTypes.func
};

const defaultProps = {
  onClick: undefined
};

const SearchButton = (props) => (
  <Wrapper {...props}>
    <Icon />
  </Wrapper>
);

SearchButton.propTypes = propTypes;
SearchButton.defaultProps = defaultProps;

export default SearchButton;
