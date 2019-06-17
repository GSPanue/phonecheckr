import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';

import { StyledTableCell } from './styles';
import ResultsItem from '../ResultsItem';

const ResultsTable = () => (
  <Table>
    <TableHead>
      <TableRow>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell>Price</StyledTableCell>
        <StyledTableCell align="center">Stores</StyledTableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <ResultsItem name="iPhone 6s" price="905.11" stores="23" />
    </TableBody>
  </Table>
);

export default ResultsTable;
