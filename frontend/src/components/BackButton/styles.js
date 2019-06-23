import styled from 'styled-components';

import Button from '@material-ui/core/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledButton = styled(Button)`
  && {
    ${({ theme: { button } }) => (`
    border: 1px solid ${button.primaryBorderColor};
    color: ${button.primaryColor};
  `)}
  }
`;

export {
  Wrapper,
  StyledButton
};
