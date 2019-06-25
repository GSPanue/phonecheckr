import React, { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const withLocation = (Component) => ({ changeLocation, ...rest }) => {
  useEffect(() => () => {
    const currentComponent = Component.name.toLowerCase();

    changeLocation(currentComponent);
  }, []);

  return (
    <Component {...rest} />
  );
};

export default withLocation;
