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
    else if (element === 'size') {
      text = `${text}GB`;
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
 * @param {string} path - The path.
 * @param {string} name - The product name.
 * @param {object} history - The router history object.
 *
 * @returns {void}
 */
const navigate = (type, path, { history }) => {
  if (type === 'product') {
    window.open(path, '_blank');
  }
  else {
    history.push({
      pathname: `/product/${path}`
    });
  }
};

export {
  getRowCells,
  navigate
};
