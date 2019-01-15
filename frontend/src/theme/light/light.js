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
  logo: {
    primaryColor: palette.carnation,
    secondaryColor: palette.mineShaft,
    primaryWeight: '700',
    secondaryWeight: '300',
    large: '30px',
    medium: '20px'
  },
  input: {
    primaryColor: palette.mineShaft,
    secondaryColor: palette.alto,
    fontWeight: '500',
    fontSize: '13px'
  },
  searchBar: {
    primaryBackground: palette.white
  },
  icon: {
    primaryColor: palette.carnation,
    fontSize: '14px'
  }
};

export default light;
