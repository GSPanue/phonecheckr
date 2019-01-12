import React from 'react';

import { Wrapper, Content } from './styles';
import Brand from '../../components/Brand';
import Footer from '../../components/Footer';

const Search = () => (
  <Wrapper>
    <Content>
      <Brand large />
    </Content>
    <Footer />
  </Wrapper>
);

export default Search;
