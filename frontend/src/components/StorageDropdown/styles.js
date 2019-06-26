import styled from 'styled-components';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const StyledFormControl = styled(FormControl)`
  && {
    flex-direction: unset;
  }
`;

const StyledInputLabel = styled(InputLabel)`
  && {
    color: ${({ theme: { text } }) => (text.primaryColor)} !important;
  }
`;

export {
  StyledFormControl,
  StyledInputLabel
};
