import React from 'react';

import { Wrapper, Content } from './styles';
import Link from '../../components/Link';
import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';

const Search = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <Logo large />
      </Link>
      <SearchBar autoFocus autosuggest />
    </Content>
  </Wrapper>
);

export default Search;
