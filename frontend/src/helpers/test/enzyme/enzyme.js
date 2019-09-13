import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';

/**
 * Mounts and returns a themed component.
 *
 * @param {array} children - The child components.
 * @param {object} theme - The theme.
 */
const mountWithTheme = (children, theme) => (
  mount(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
);

export {
  mountWithTheme
};
