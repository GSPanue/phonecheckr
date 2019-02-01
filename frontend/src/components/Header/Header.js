import React from 'react';

import { Wrapper, StyledSearchBar } from './styles';
import Link from '../Link';
import Logo from '../Logo';

const Header = () => (
  <Wrapper>
    <Link to="/">
      <Logo />
    </Link>
    <StyledSearchBar />
  </Wrapper>
);

export default Header;
