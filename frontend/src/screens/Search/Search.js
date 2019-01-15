import React from 'react';

import { Wrapper, Content } from './styles';
import Brand from '../../components/Brand';
import SearchBar from '../../components/SearchBar';
import Footer from '../../components/Footer';

const Search = () => (
  <Wrapper>
    <Content>
      <Brand large />
      <SearchBar />
    </Content>
    <Footer />
  </Wrapper>
);

export default Search;
