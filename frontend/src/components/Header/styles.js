import styled from 'styled-components';

import SearchBar from '../SearchBar';

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
  StyledSearchBar
};
