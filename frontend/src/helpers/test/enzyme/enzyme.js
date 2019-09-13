import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * Wraps children with a ThemeProvider component.
 *
 * @param {array} children - The children.
 * @param {object} theme - The theme.
 *
 * @returns {object}
 */
const mountWithTheme = (children, theme) => (
  mount(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
);

/**
 * Wraps children with a BrowserRouter component.
 *
 * @param {array} children - The children.
 *
 * @returns {object}
 */
const mountWithRouter = (children) => (
  mount(<Router>{children}</Router>)
);

export {
  mountWithTheme,
  mountWithRouter
};
