import styled from 'styled-components';

const Wrapper = styled.div`
  ${({ fixed }) => (fixed) && `
    width: 100%;
    position: fixed;
  `}
  ${({ borderless }) => (!borderless) && `
    border-bottom: 1px solid rgba(0,0,0,.05);
  `}
  background: ${({ theme }) => (theme.header.background)};
  z-index: 5;
`;

export {
  Wrapper
};
