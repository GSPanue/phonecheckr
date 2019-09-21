import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

const InnerContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledImg = styled.img`
  max-width: 300px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 32px;
  font-weight: 500;
  color: ${({ theme: { text } }) => (text.primaryColor)};
  padding-bottom: 4px;
`;

const Description = styled.span`
  font-size: 18px;
  color: ${({ theme: { text } }) => (text.primaryColor)};
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

export {
  Wrapper,
  InnerContent,
  StyledImg,
  TextContainer,
  Title,
  Description
};
