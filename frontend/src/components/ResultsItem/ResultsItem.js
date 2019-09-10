import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import { getRowCells, navigate } from './helpers';

import { StyledTableRow } from './styles';

const propTypes = {
  type: PropTypes.oneOf(['results', 'product']).isRequired,
  website: PropTypes.string,
  page: PropTypes.string
};

const defaultProps = {
  website: undefined,
  page: undefined
};

const ResultsItem = ({
  type,
  website,
  page,
  ...rest
}) => {
  const cells = useMemo(() => (
    getRowCells(rest)
  ), []);

  const handleClick = useCallback(() => (
    navigate(type, (website || page), rest)
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
