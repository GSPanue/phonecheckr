import React from 'react';

import { Wrapper, Content } from './styles';
import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';
import Footer from '../../components/Footer';

const Search = () => (
  <Wrapper>
    <Content>
      <Logo large />
      <SearchBar />
    </Content>
    <Footer />
  </Wrapper>
);

export default Search;
