import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Logo from '../Logo';
import SearchBar from '../SearchBar';

const StyledAppBar = styled(AppBar)`
  && {
    box-shadow: 0 2px 3px rgba(0,0,0,0.06);
  }
`;

const StyledToolbar = styled(Toolbar)`
  && {
    padding: 0 10%;
  }
`;

const StyledLogo = styled(Logo)`
  font-size: 26px;
`;

const StyledSearchBar = styled(SearchBar)`
  height: 42px;
  max-width: 344px;
  box-shadow: none;
  margin-left: 34px;

  input {
    font-size: 16px;
  }

  && svg {
    font-size: 22px;
  }
`;

export {
  StyledAppBar,
  StyledToolbar,
  StyledLogo,
  StyledSearchBar
};
