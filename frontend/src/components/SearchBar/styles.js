import styled from 'styled-components';

import Input from '../Input';

const Wrapper = styled.div`
  width: 100%;
  max-width: 337px;
  height: 34px;
  display: flex;
  align-items: center;
  padding: 0 4px 0 13px;
  background: ${({ theme: { searchBar } }) => (searchBar.primaryBackground)};
`;

const StyledInput = styled(Input)`
  flex: 1;
`;

export {
  Wrapper,
  StyledInput
};
