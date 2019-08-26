/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import { getCurrentRoute } from './helpers';

const withLocation = (Component) => ({
  setCurrentLocation,
  setPreviousLocation,
  history,
  ...rest
}) => {
  useEffect(() => {
    const { location: { pathname } } = history;

    const currentLocation = getCurrentRoute(pathname);

    setCurrentLocation(currentLocation);

    return (() => {
      setPreviousLocation();
    });
  }, []);

  return (
    <Component {...rest} />
  );
};

export default withLocation;
