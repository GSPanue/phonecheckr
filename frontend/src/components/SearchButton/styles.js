import styled from 'styled-components';

import SearchIcon from '@material-ui/icons/Search';

const Icon = styled(SearchIcon)`
  && {
    ${({ theme: { icon } }) => (`
      font-size: ${icon.fontSize};
      color: ${icon.primaryColor};
    `)}
  }
`;

export {
  Icon
};
