import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({ theme: { searchBar } }) => (searchBar.primaryBackground)};
`;

export {
  Wrapper,
};
