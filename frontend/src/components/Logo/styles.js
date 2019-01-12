import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: ${({ size }) => (size)};
`;

const StyledText = styled.span`
  ${({ primary, theme: { logo } }) => (`
    font-weight: ${(primary) ? logo.primaryWeight : logo.secondaryWeight};
    color: ${(primary) ? logo.primaryColor : logo.secondaryColor};
  `)};
`;

export {
  Wrapper,
  StyledText
};
