import React from 'react';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import store from '../../store';
import { material, light } from '../../theme';

const propTypes = {
  children: PropTypes.element.isRequired
};

const Provider = ({ children }) => (
  <ReduxProvider store={store}>
    <MuiThemeProvider theme={material}>
      <StyledComponentsThemeProvider theme={light}>
        {children}
      </StyledComponentsThemeProvider>
    </MuiThemeProvider>
  </ReduxProvider>
);

Provider.propTypes = propTypes;

export default Provider;
