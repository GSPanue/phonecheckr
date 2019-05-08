import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

const Content = styled.div`
  flex: 1;
  align-self: stretch;
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
  font-size: 20px;
`;

const ProductCount = styled.span`
  color: grey;
`;

export {
  Wrapper,
  Content,
  QueryContainer,
  Query,
  ProductCountContainer,
  ProductCount
};
