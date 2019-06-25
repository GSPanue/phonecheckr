import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

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
      <KeyboardArrowLeft />
      Go Back
    </StyledButton>
  );
};

BackButton.propTypes = propTypes;

export default BackButton;
