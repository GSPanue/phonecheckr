import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  align-items: center;
  justify-content: center;

  & > * {
    margin: 15px 0;
  }
`;

export {
  Wrapper,
  Content
};
