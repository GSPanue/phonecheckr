import React from 'react';

import { StyledAppBar, StyledToolbar, StyledLogo, StyledSearchBar } from './styles';
import Link from '../Link';

const Header = () => (
  <StyledAppBar elevation={0} position="fixed">
    <StyledToolbar>
      <Link to="/">
        <StyledLogo />
      </Link>
      <StyledSearchBar />
    </StyledToolbar>
  </StyledAppBar>
);

export default Header;
