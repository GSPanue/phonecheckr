import styled from 'styled-components';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const StyledTableRow = styled(TableRow)`
  td {
    border: none;
  }
`;

const StyledTableCell = styled(TableCell)`
  && {
    font-size: 16px;
    padding-left: 0;
    color: ${({ theme: { table } }) => (table.primaryColor)};
    border-bottom: 1px solid ${({ theme: { table } }) => (table.primaryBorderColor)};
  }
`;

export {
  StyledTableRow,
  StyledTableCell
};
