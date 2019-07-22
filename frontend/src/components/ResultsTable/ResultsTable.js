import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

import { getTableHead, getNextTableItems, getTotalTableItems } from './helpers';

import { StyledTableRow } from './styles';
import TablePaginationActions from '../TablePaginationActions';

const propTypes = {
  type: PropTypes.oneOf(['results', 'product']),
  items: PropTypes.array.isRequired
};

const defaultProps = {
  type: 'results'
};

const ResultsTable = ({ type, items }) => {
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const tableHead = useMemo(() => (
    getTableHead(type)
  ), [type]);
  const tableItems = getNextTableItems(type, items, page, 10);
  const totalTableItems = getTotalTableItems(items);

  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableHead}
        </TableRow>
      </TableHead>
      <TableBody>
        {tableItems}
      </TableBody>
      <TableFooter>
        <StyledTableRow>
          <TablePagination
            rowsPerPageOptions={[10]}
            colSpan={(type === 'product') ? 5 : 3}
            count={totalTableItems}
            rowsPerPage={10}
            page={page}
            onChangePage={handleChangePage}
            ActionsComponent={TablePaginationActions}
          />
        </StyledTableRow>
      </TableFooter>
    </Table>
  );
};

ResultsTable.propTypes = propTypes;
ResultsTable.defaultProps = defaultProps;

export default ResultsTable;
