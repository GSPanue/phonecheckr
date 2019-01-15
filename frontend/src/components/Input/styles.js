import styled from 'styled-components';

import InputBase from '@material-ui/core/InputBase';

const Wrapper = styled(InputBase)`
  && {
    ${({ theme: { input } }) => (`
      font-weight: ${input.fontWeight};
      font-size: ${input.fontSize};
      color: ${input.primaryColor};

      input {
        &::placeholder {
          opacity: 1;
          color: ${input.secondaryColor}
        }
      }
    `)}
  }
`;

export {
  Wrapper
};
