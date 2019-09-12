import {
  SHOW_PRODUCT,
  CLEAR_PRODUCT,
  SHOW_ERROR
} from '../../constants';

/**
 * @todo Add properties for product information
 */
const initialState = {
  show: false,
  image: '',
  name: '',
  description: '',
  range: [],
  deals: [],
  error: false
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRODUCT:
      return ({
        ...state,
        ...action.payload,
        show: true
      });

    case CLEAR_PRODUCT:
      return ({
        ...state,
        show: false,
        image: '',
        name: '',
        description: '',
        range: [],
        deals: [],
        error: false
      });

    case SHOW_ERROR:
      return ({
        ...state,
        error: true
      });

    default:
      return (
        state
      );
  }
};

export default product;
