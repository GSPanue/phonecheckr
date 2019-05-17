import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;

  ${({ theme: { text } }) => (`
    font-weight: ${text.medium};
    color: ${text.primaryColor};
  `)}
`;

const QueryContainer = styled(TextContainer)`
  font-size: 32px;
`;

const ProductCountContainer = styled(TextContainer)`
  padding-top: 24px;
  font-size: 19px;
`;

const StyledText = styled.span`
  color: ${({ theme: { text } }) => (text.secondaryColor)}
`;

export {
  Wrapper,
  QueryContainer,
  ProductCountContainer,
  StyledText
};
