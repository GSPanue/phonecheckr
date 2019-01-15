import styled from 'styled-components';

import Input from '../Input';

const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ theme: { searchBar } }) => (searchBar.width)};
  height: ${({ theme: { searchBar } }) => (searchBar.height)};
  display: flex;
  align-items: center;
  padding: 0 5px 0 13px;
  border-radius: 2px;
  background: ${({ theme: { searchBar } }) => (searchBar.primaryBackground)};
`;

const StyledInput = styled(Input)`
  flex: 1;
`;

export {
  Wrapper,
  StyledInput
};
