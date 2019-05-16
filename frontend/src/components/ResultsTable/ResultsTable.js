import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { PrimaryTableCell } from './styles';

const ResultsTable = () => (
  <Table>
    <TableHead>
      <TableRow>
        <PrimaryTableCell>Name</PrimaryTableCell>
        <PrimaryTableCell>Price</PrimaryTableCell>
        <PrimaryTableCell align="center">Stores</PrimaryTableCell>
      </TableRow>
    </TableHead>
  </Table>
);

export default ResultsTable;
