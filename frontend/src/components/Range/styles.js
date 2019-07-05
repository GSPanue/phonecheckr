import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 16px 0;
  font-size: 14px;
`;

const StyledText = styled.span`
  font-weight: 500;
  color: ${({ theme: { text } }) => (text.secondaryColor)};
`;

export {
  Wrapper,
  StyledText
};
