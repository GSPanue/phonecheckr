import React from 'react';
import shortid from 'shortid';

import { StyledTableCell } from './styles';
import ResultsItem from '../ResultsItem';

/**
 * Creates an array of StyledTableCell components.
 *
 * @param {string} type - The table type.
 *
 * @returns {array}
 */
const getTableHead = (type) => {
  let columns = [];

  if (type === 'results') {
    columns = ['Name', 'Price', 'Deals'];
  }
  else if (type === 'product') {
    columns = ['Store', 'Name', 'Price', 'Delivery', 'Stock'];
  }

  return (
    columns.map((column) => {
      if (column === 'Deals') {
        return (
          <StyledTableCell key={column} align="center">{column}</StyledTableCell>
        );
      }

      return (
        <StyledTableCell key={column}>{column}</StyledTableCell>
      );
    })
  );
};

/**
 * Creates an array of ResultsItem components.
 *
 * @param {string} type - The table type.
 * @param {array} items - The items.
 * @param {number} page - The page.
 * @param {number} rowsPerPage - The rows per page.
 *
 * @returns {array}
 */
const getNextTableItems = (type, items, page, rowsPerPage) => (
  items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => {
    const key = shortid.generate();

    const resultsItemProps = {
      key,
      type
    };

    return (
      <ResultsItem {...resultsItemProps} {...item} />
    );
  })
);

/**
 * Gets the total number of table items.
 *
 * @param {array} items - The items.
 *
 * @returns {number}
 */
const getTotalTableItems = (items) => (
  items.length
);

export {
  getTableHead,
  getNextTableItems,
  getTotalTableItems
};
