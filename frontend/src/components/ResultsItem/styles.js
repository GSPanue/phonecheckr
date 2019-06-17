import styled from 'styled-components';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const StyledTableRow = styled(TableRow)`
  cursor: pointer;
`;

const StyledTableCell = styled(TableCell)`
  && {
    font-size: 16px;
    font-weight: ${({ theme: { text } }) => (text.light)};
    padding: 0;
    color: ${({ danger, theme: { table } }) => ((danger) ? table.secondaryColor : table.primaryColor)};
    border-bottom: 1px solid ${({ theme: { table } }) => (table.primaryBorderColor)};
  }
`;

export {
  StyledTableRow,
  StyledTableCell
};
