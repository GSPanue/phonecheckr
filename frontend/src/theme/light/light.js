/**
 * Color palette
 */
const palette = {
  alabaster: '#f8f8f8',
  carnation: '#f44f4f',
  mineShaft: '#313131',
  alto: '#d2d2d2',
  white: '#ffffff'
};

/**
 * Light theme
 */
const light = {
  progressBar: {
    primaryColor: palette.carnation
  },
  text: {
    primaryColor: palette.mineShaft,
    secondaryColor: palette.carnation,
    bold: '700',
    medium: '500',
    light: '300'
  },
  logo: {
    primaryColor: palette.carnation,
    secondaryColor: palette.mineShaft,
    primaryWeight: '700',
    secondaryWeight: '300',
    large: '48px',
    medium: '24px'
  },
  input: {
    primaryColor: palette.mineShaft,
    secondaryColor: palette.alto,
    fontWeight: '400',
    fontSize: '18px'
  },
  searchBar: {
    width: '544px',
    height: '52px',
    primaryBackground: palette.white,
    secondaryBackground: palette.alabaster
  },
  ripple: {
    primaryColor: palette.carnation
  },
  icon: {
    primaryColor: palette.carnation,
    fontSize: '25px'
  },
  table: {
    primaryColor: palette.mineShaft,
    primaryBorderColor: palette.alabaster
  },
  button: {
    primaryBorderColor: palette.carnation,
    primaryColor: palette.carnation
  }
};

export default light;
