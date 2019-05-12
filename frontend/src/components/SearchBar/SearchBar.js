import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { navigate } from './helpers';

import { Wrapper } from './styles';
import SearchInput from '../SearchInput';
import SearchButton from '../SearchButton';

const propTypes = {
  primary: PropTypes.bool,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
  autosuggest: PropTypes.bool,
  history: PropTypes.object.isRequired,
  revokeSubmitQuery: PropTypes.func.isRequired,
  clearQuery: PropTypes.func.isRequired
};

const defaultProps = {
  primary: false,
  autoFocus: false,
  className: undefined,
  autosuggest: false
};

const SearchBar = ({
  primary,
  autoFocus,
  className,
  autosuggest,
  submitted,
  ...rest
}) => {
  useEffect(() => {
    if (submitted) {
      navigate(rest);
    }
  }, [submitted]);

  const wrapperProps = {
    primary,
    className
  };

  const inputProps = {
    autoFocus,
    autosuggest
  };

  return (
    <Wrapper {...wrapperProps}>
      <SearchInput {...inputProps} />
      <SearchButton />
    </Wrapper>
  );
};

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
