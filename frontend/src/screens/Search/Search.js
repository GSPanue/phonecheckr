import React from 'react';

import { Wrapper, StyledSearchBar } from './styles';
import Link from '../../components/Link';
import Logo from '../../components/Logo';

const Search = () => (
  <Wrapper>
    <Link to="/">
      <Logo large />
    </Link>
    <StyledSearchBar primary autoFocus autosuggest />
  </Wrapper>
);

export default Search;
