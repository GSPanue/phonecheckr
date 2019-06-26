import {
  SHOW_PRODUCT,
  HIDE_PRODUCT,
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

    case HIDE_PRODUCT:
      return ({
        ...state,
        show: false
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
