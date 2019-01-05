import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

/**
 * Material theme
 */
const material = {
  palette: {
    primary: {
      main: '#ffffff',
      contrastText: '#272a2f'
    },
    secondary: {
      main: '#272a2f'
    }
  },
  typography: {
    useNextVariants: true
  }
};

export default createMuiTheme(material);
