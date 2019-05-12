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
  font-size: 26px;
`;

const Query = styled.span`
  color: ${({ theme: { text } }) => (text.secondaryColor)};
`;

const ProductCountContainer = styled(TextContainer)`
  margin-top: 5px;
  font-size: 16px;
`;

const ProductCount = styled.span`
  color: ${({ theme: { text } }) => (text.secondaryColor)}
`;

export {
  Wrapper,
  QueryContainer,
  Query,
  ProductCountContainer,
  ProductCount
};
