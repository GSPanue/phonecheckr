import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';

const Wrapper = styled(IconButton)`
  && {
    padding: 6px;

    ${({ theme: { ripple } }) => (`
      &:hover {
        background-color: ${ripple.primaryColor}30;
      }
    `)}
  }
`;

export {
  Wrapper
};
