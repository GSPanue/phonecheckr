import styled from 'styled-components';

import SearchBar from '../SearchBar';

const Wrapper = styled.header`
  position: sticky;
  height: 72px;
  width: 100%;
  top: 0;
  left: auto;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${({ theme: { header } }) => (header.primaryBackground)};
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
  Wrapper,
  StyledSearchBar
};
