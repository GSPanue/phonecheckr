import React, { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const withLocation = (Component) => ({ setCurrentLocation, setPreviousLocation, ...rest }) => {
  useEffect(() => {
    const currentComponent = Component.name.toLowerCase();

    setCurrentLocation(currentComponent);

    return (() => {
      setPreviousLocation();
    });
  }, []);

  return (
    <Component {...rest} />
  );
};

export default withLocation;
