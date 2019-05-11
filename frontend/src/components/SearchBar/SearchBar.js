import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { navigate } from './helpers';

import { Wrapper } from './styles';
import SearchInput from '../SearchInput';
import SearchButton from '../SearchButton';

const propTypes = {
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
  autoFocus: false,
  className: undefined,
  autosuggest: false
};

const SearchBar = ({
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

  const inputProps = {
    autoFocus,
    autosuggest
  };

  return (
    <Wrapper className={className}>
      <SearchInput {...inputProps} />
      <SearchButton />
    </Wrapper>
  );
};

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
