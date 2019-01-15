import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Icon } from './styles';

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
