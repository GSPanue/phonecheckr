import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

import { StyledAppBar, StyledLogo, StyledSearchBar } from './styles';
import Link from '../Link';

const Header = () => (
  <StyledAppBar elevation={0} position="fixed">
    <Toolbar>
      <Link to="/">
        <StyledLogo />
      </Link>
      <StyledSearchBar />
    </Toolbar>
  </StyledAppBar>
);

export default Header;
