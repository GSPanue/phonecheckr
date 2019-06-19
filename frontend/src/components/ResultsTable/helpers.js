import React from 'react';

import ResultsItem from '../ResultsItem';

/**
 * Creates an array of ResultsItem components.
 *
 * @param {array} items - The items.
 *
 * @returns {array}
 */
const getTableItems = (items) => (
  items.map((item) => (
    <ResultsItem key={item.name} {...item} />
  ))
);

export {
  getTableItems
};

window.getTableItems = getTableItems;
