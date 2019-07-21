import React from 'react';
import shortid from 'shortid';

import { StyledTableCell } from './styles';

/**
 * Creates an array of StyledTableCell components.
 *
 * @returns {array}
 */
const getRowCells = ({
  history,
  location,
  match,
  staticContext,
  ...rest
}) => (
  Object.keys(rest).map((element) => {
    let text = rest[element];
    let align;
    const key = shortid.generate();

    if (element === 'price') {
      text = `£${text}`;
    }
    else if (element === 'delivery') {
      text = (text === 0.00) ? 'Free' : `£${rest.price + text} incl. shipping`;
    }
    else if (element === 'stores' || element === 'stock') {
      align = 'center';
    }

    const styledTableCellProps = {
      key,
      align
    };

    return (
      <StyledTableCell {...styledTableCellProps}>{text}</StyledTableCell>
    );
  })
);

/**
 * Navigates to the product screen or an external website.
 *
 * @param {string} type - The table type.
 * @param {string} website - The product's website address.
 * @param {string} name - The product name.
 * @param {object} history - The router history object.
 *
 * @returns {void}
 */
const navigate = (type, website, { name, history }) => {
  if (type === 'product') {
    window.open(website, '_blank');
  }
  else {
    const productName = name.replace(/\W+/g, '-').toLowerCase();

    history.push({
      pathname: `/product/${productName}`
    });
  }
};

export {
  getRowCells,
  navigate
};
