import styled from 'styled-components';

import TableCell from '@material-ui/core/TableCell';

const PrimaryTableCell = styled(TableCell)`
  && {
    font-size: 16px;
    padding: 0;
    color: ${({ theme: { table } }) => (table.primaryColor)};
    border-bottom: 1px solid ${({ theme: { table } }) => (table.primaryBorderColor)};
  }
`;

export {
  PrimaryTableCell
};
