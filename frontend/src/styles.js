import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme: { background } }) => (background)};
`;

export {
  Wrapper
};
