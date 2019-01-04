import styled from 'styled-components';

const Wrapper = styled.div`
  color: ${({ theme }) => (theme.brand.color)};
  font-weight: bold;
`;

export {
  Wrapper
};
