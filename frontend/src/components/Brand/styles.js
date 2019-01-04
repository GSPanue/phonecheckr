import styled from 'styled-components';

import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: ${({ theme }) => (theme.brand.color)};
  font-weight: bold;
  text-decoration: none;
  user-select: none;
`;

export {
  StyledLink
};
