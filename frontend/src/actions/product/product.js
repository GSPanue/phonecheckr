import axios from 'axios';

import { getAPIURL } from '../../helpers';

import {
  SHOW_PROGRESS_BAR,
  HIDE_PROGRESS_BAR,
  SHOW_PRODUCT,
  CLEAR_PRODUCT,
  SHOW_ERROR
} from '../../constants';

const fetchProduct = (id) => (
  (dispatch, getState) => {
    dispatch({
      type: SHOW_PROGRESS_BAR
    });

    const APIURL = getAPIURL();

    axios.get(`${APIURL}/product`, {
      params: {
        id
      }
    }).then((res) => {
      const { data: { product } } = res;
      const { history: { currentLocation } } = getState();

      if (currentLocation === 'product') {
        dispatch({
          type: HIDE_PROGRESS_BAR
        });

        dispatch({
          type: SHOW_PRODUCT,
          payload: product
        });
      }
    }).catch(() => {
      dispatch({
        type: SHOW_ERROR
      });
    });
  }
);

const clearProduct = () => ({
  type: CLEAR_PRODUCT
});

const showError = () => ({
  type: SHOW_ERROR
});

export {
  fetchProduct,
  clearProduct,
  showError
};
