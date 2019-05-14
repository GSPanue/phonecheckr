import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';

import Logo from '../Logo';
import SearchBar from '../SearchBar';

const StyledAppBar = styled(AppBar)`
  ${({ theme: { header } }) => (`
    border-bottom: 1px solid ${header.primaryBorderColor};
  `)}
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
  StyledLogo,
  StyledSearchBar
};
