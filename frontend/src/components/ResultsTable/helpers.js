import React from 'react';

import ResultsItem from '../ResultsItem';

/**
 * Creates an array of ResultsItem components.
 *
 * @param {array} items - The items.
 * @param {number} page - The page.
 * @param {number} rowsPerPage - The rows per page.
 *
 * @returns {array}
 */
const getNextTableItems = (items, page, rowsPerPage) => (
  items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
    <ResultsItem key={item.name} {...item} />
  ))
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
  getNextTableItems,
  getTotalTableItems
};
