import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

const getStorageOptions = (options) => (
  options.map((option) => (
    <MenuItem key={option} value={option}>{option}</MenuItem>
  ))
);

export {
  getStorageOptions
};
