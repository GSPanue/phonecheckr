import styled from 'styled-components';

import SearchIcon from '@material-ui/icons/Search';

const StyledSearchIcon = styled(SearchIcon)`
  && {
    ${({ theme: { icon } }) => (`
      font-size: ${icon.fontSize};
      color: ${icon.primaryColor};
    `)}
  }
`;

export {
  StyledSearchIcon
};
