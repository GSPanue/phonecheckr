import {
  SHOW_PRODUCT,
  CLEAR_PRODUCT
} from '../../constants';

/**
 * @todo Add properties for product information
 */
const initialState = {
  show: false
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
