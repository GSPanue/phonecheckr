import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';

import { PrimaryTableCell, SecondaryTableCell } from './styles';

const ResultsTable = () => (
  <Table>
    <TableHead>
      <TableRow>
        <PrimaryTableCell>Name</PrimaryTableCell>
        <PrimaryTableCell>Price</PrimaryTableCell>
        <PrimaryTableCell align="center">Stores</PrimaryTableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <SecondaryTableCell>iPhone 6s</SecondaryTableCell>
        <SecondaryTableCell>£905.11</SecondaryTableCell>
        <SecondaryTableCell align="center">23</SecondaryTableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export default ResultsTable;
