import React from 'react';
import PropTypes from 'prop-types';

import { StyledTableRow, StyledTableCell } from './styles';

const propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  stores: PropTypes.string.isRequired
};

/**
 * @todo Implement onClick event
 */
const ResultsItem = ({ name, price, stores }) => (
  <StyledTableRow hover>
    <StyledTableCell>{name}</StyledTableCell>
    <StyledTableCell>{`£${price}`}</StyledTableCell>
    <StyledTableCell align="center">{stores}</StyledTableCell>
  </StyledTableRow>
);

ResultsItem.propTypes = propTypes;

export default ResultsItem;
