import styled from 'styled-components';

import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  && {
    margin-bottom: 28px;

    ${({ theme: { button } }) => (`
    border: 1px solid ${button.primaryBorderColor};
    color: ${button.primaryColor};
  `)}
  }
`;

export {
  StyledButton
};
