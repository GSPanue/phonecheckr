import styled from 'styled-components';

import TableCell from '@material-ui/core/TableCell';

const StyledTableCell = styled(TableCell)`
  && {
    font-size: 16px;
    padding-left: 0;
    color: ${({ theme: { table } }) => (table.primaryColor)};
    border-bottom: 1px solid ${({ theme: { table } }) => (table.primaryBorderColor)};
  }
`;

export {
  StyledTableCell
};
