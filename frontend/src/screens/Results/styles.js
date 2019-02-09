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

const Heading = styled.span`
  font-size: 26px;

  ${({ theme: { text } }) => (`
    font-weight: ${text.medium};
    color: ${text.primaryColor};
  `)}
`;

const Query = styled(Heading)`
  color: ${({ theme: { text } }) => (text.secondaryColor)};
`;

export {
  Wrapper,
  Content,
  Heading,
  Query
};
