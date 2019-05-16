import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  align-self: stretch;
  margin-top: 56px;
  padding: 16px;

  @media (min-width: 0px) and (orientation: landscape) {
    margin-top: 48px;
  }

  @media (min-width: 600px) {
    margin-top: 64px;
    padding: 24px;
  }
`;

export {
  Wrapper
};
