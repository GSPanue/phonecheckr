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

const SecondaryTableCell = styled(TableCell)`
  && {
    font-size: 16px;
    font-weight: ${({ theme: { text } }) => (text.light)};
    padding: 0;
    color: ${({ danger, theme: { table } }) => ((danger) ? table.secondaryColor : table.primaryColor)};
    border-bottom: 1px solid ${({ theme: { table } }) => (table.primaryBorderColor)};
  }
`;

export {
  PrimaryTableCell,
  SecondaryTableCell
};
