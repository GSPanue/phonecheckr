import styled from 'styled-components';

const StyledText = styled.span`
  ${({ bold, theme: { text } }) => (bold) && `font-weight: ${text.bold};`}
`;

export {
  StyledText
};
