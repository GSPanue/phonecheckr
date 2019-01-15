import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const Wrapper = styled(IconButton)`
  && {
    padding: 8px;
  }
`;

const Icon = styled(SearchIcon)`
  && {
    ${({ theme: { icon } }) => (`
      font-size: ${icon.fontSize};
      color: ${icon.primaryColor};
    `)}
  }
`;

export {
  Wrapper,
  Icon
};
