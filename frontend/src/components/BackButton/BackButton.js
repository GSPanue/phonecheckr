import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

const propTypes = {
  history: PropTypes.object.isRequired
};

const BackButton = ({ history }) => {
  const handleGoBack = useCallback(() => (
    history.goBack()
  ), []);

  return (
    <StyledButton variant="outlined" size="small" onClick={handleGoBack}>
        Go Back
    </StyledButton>
  );
};

BackButton.propTypes = propTypes;

export default BackButton;
