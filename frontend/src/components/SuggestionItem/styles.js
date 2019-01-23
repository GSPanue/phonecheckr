import styled from 'styled-components';

const StyledText = styled.span`
  ${({ bold }) => (bold) && 'font-weight: 700;'}
`;

export {
  StyledText
};
