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
  align-items: center;

  ${({ padding }) => (padding) && (`
    padding-top: 6px;
  `)}
`;

const StyledText = styled.span`
  font-size: ${({ large, small }) => {
    if (large || small) {
      return (
        (large) ? '32px' : '16px'
      );
    }

    return (
      '24px'
    );
  }};

  font-weight: ${({ theme: { text } }) => (text.medium)};

  color: ${({ danger, theme: { text } }) => (
    (danger) ? text.secondaryColor : text.primaryColor
  )};
`;

export {
  Wrapper,
  TextContainer,
  StyledText
};
