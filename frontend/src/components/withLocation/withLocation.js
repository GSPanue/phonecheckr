import React, { useEffect } from 'react';

const withLocation = (Component) => (props) => {
  const WrappedComponent = () => {
    // eslint-disable-next-line react/prop-types
    const { changeLocation, ...rest } = props;

    useEffect(() => () => {
      const currentComponent = Component.name.toLowerCase();

      changeLocation(currentComponent);
    }, []);

    return (
      <Component {...rest} />
    );
  };

  return (
    <WrappedComponent />
  );
};

export default withLocation;
