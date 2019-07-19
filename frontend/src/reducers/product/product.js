import {
  SHOW_PRODUCT,
  CLEAR_PRODUCT,
  UPDATE_STORAGE
} from '../../constants';

/**
 * @todo Add properties for product information
 */
const initialState = {
  show: false,
  storage: ''
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
        show: false,
        storage: ''
      });

    case UPDATE_STORAGE:
      return ({
        ...state,
        storage: action.payload
      });

    default:
      return (
        state
      );
  }
};

export default product;
