import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

import { getNextTableItems, getTotalTableItems } from './helpers';

import { StyledTableCell } from './styles';
import TablePaginationActions from '../TablePaginationActions';

const propTypes = {
  items: PropTypes.array.isRequired
};

const ResultsTable = ({ items }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const { target: { value } } = event;

    setRowsPerPage(parseInt(value, 10));
  };

  const tableItems = getNextTableItems(items, page, rowsPerPage);
  const totalTableItems = getTotalTableItems(items);

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
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[10, 25]}
            colSpan={3}
            count={totalTableItems}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </TableRow>
      </TableFooter>
    </Table>
  );
};

ResultsTable.propTypes = propTypes;

export default ResultsTable;
