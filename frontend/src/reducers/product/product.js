import {
  SHOW_PRODUCT,
  CLEAR_PRODUCT
} from '../../constants';

/**
 * @todo Add properties for product information
 */
const initialState = {
  show: false,
  image: '',
  name: '',
  description: '',
  range: {
    from: null,
    to: null
  },
  results: []
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRODUCT:
      return ({
        ...state,
        show: true
      });

    case CLEAR_PRODUCT:
      return ({
        ...state,
        show: false
      });

    default:
      return (
        state
      );
  }
};

export default product;
