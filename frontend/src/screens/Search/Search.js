import React from 'react';

import { Wrapper } from './styles';
import Link from '../../components/Link';
import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';

const Search = () => (
  <Wrapper>
    <Link to="/">
      <Logo large />
    </Link>
    <SearchBar autoFocus autosuggest />
  </Wrapper>
);

export default Search;
