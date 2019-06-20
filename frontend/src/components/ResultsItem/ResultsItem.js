import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { navigate } from './helpers';

import { StyledTableRow, StyledTableCell } from './styles';

const propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  stores: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
};

const ResultsItem = ({
  name,
  price,
  stores,
  ...rest
}) => {
  const handleClick = useCallback(() => (
    navigate(name, rest)
  ), []);

  return (
    <StyledTableRow onClick={handleClick} hover>
      <StyledTableCell>{name}</StyledTableCell>
      <StyledTableCell>{`£${price}`}</StyledTableCell>
      <StyledTableCell align="center">{stores}</StyledTableCell>
    </StyledTableRow>
  );
};

ResultsItem.propTypes = propTypes;

export default ResultsItem;
