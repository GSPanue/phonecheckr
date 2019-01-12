import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import { material, light } from '../../theme';

const propTypes = {
  children: PropTypes.element.isRequired
};

const Provider = ({ children }) => (
  <MuiThemeProvider theme={material}>
    <StyledComponentsThemeProvider theme={light}>
      {children}
    </StyledComponentsThemeProvider>
  </MuiThemeProvider>
);

Provider.propTypes = propTypes;

export default Provider;
