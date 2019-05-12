import styled from 'styled-components';

import SearchBar from '../../components/SearchBar';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledSearchBar = styled(SearchBar)`
  margin-top: 20px;
`;

export {
  Wrapper,
  StyledSearchBar
};
