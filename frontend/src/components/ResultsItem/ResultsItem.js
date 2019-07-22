import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import { getRowCells, navigate } from './helpers';

import { StyledTableRow } from './styles';

const propTypes = {
  type: PropTypes.oneOf(['results', 'product']).isRequired,
  storage: PropTypes.number,
  website: PropTypes.string
};

const defaultProps = {
  storage: undefined,
  website: undefined
};

const ResultsItem = ({
  type,
  website,
  storage,
  ...rest
}) => {
  const cells = useMemo(() => (
    getRowCells(rest)
  ), []);

  const handleClick = useCallback(() => (
    navigate(type, website, rest)
  ), []);

  return (
    <StyledTableRow onClick={handleClick} hover>
      {cells}
    </StyledTableRow>
  );
};

ResultsItem.propTypes = propTypes;
ResultsItem.defaultProps = defaultProps;

export default ResultsItem;
