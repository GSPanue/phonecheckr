import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';

import { getTableItems } from './helpers';

import { StyledTableCell } from './styles';

const propTypes = {
  items: PropTypes.array.isRequired
};

const ResultsTable = ({ items }) => {
  const tableItems = getTableItems(items);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <StyledTableCell>Name</StyledTableCell>
          <StyledTableCell>Price</StyledTableCell>
          <StyledTableCell align="center">Stores</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tableItems}
      </TableBody>
    </Table>
  );
};

ResultsTable.propTypes = propTypes;

export default ResultsTable;
