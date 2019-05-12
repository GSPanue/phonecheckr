import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

import { StyledAppBar, StyledSearchBar } from './styles';
import Link from '../Link';
import Logo from '../Logo';

const Header = () => (
  <StyledAppBar elevation={0} position="fixed">
    <Toolbar>
      <Link to="/">
        <Logo />
      </Link>
      <StyledSearchBar />
    </Toolbar>
  </StyledAppBar>
);

export default Header;
