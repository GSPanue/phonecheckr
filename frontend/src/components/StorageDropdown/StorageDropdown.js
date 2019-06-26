import React, { useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';

import { getStorageOptions } from './helpers';

import { StyledFormControl, StyledInputLabel } from './styles';

const propTypes = {
  storageOptions: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  updateStorage: PropTypes.func.isRequired
};

const StorageDropdown = ({ storageOptions, value, updateStorage }) => {
  useEffect(() => {
    const firstOption = storageOptions[0];

    updateStorage(firstOption);
  }, []);

  const handleChange = useCallback((event) => (
    updateStorage(event.target.value)
  ), []);

  const options = useMemo(() => (
    getStorageOptions(storageOptions)
  ), []);

  return (
    <StyledFormControl>
      <StyledInputLabel disableAnimation>Storage</StyledInputLabel>
      <Select
        value={value}
        onChange={handleChange}
        disableUnderline
      >
        {options}
      </Select>
    </StyledFormControl>
  );
};

StorageDropdown.propTypes = propTypes;

export default StorageDropdown;
