import {
  SHOW_PROGRESS_BAR,
  HIDE_PROGRESS_BAR,
  SHOW_PRODUCT,
  CLEAR_PRODUCT,
  UPDATE_STORAGE
} from '../../constants';

/**
 * @todo Add param for product
 */
const fetchProduct = () => (
  (dispatch, getState) => {
    dispatch({
      type: SHOW_PROGRESS_BAR
    });

    /**
     * @todo Fetch and store product information
     */

    const productInformation = null;

    setTimeout(() => {
      const { history: { currentLocation } } = getState();

      if (currentLocation === 'product') {
        dispatch({
          type: HIDE_PROGRESS_BAR
        });

        dispatch({
          type: SHOW_PRODUCT,
          payload: productInformation
        });
      }
    }, 500);
  }
);

const clearProduct = () => ({
  type: CLEAR_PRODUCT
});

const updateStorage = (size) => ({
  type: UPDATE_STORAGE,
  payload: size
});

export {
  fetchProduct,
  clearProduct,
  updateStorage
};
