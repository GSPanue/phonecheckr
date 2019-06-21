import {
  SHOW_PRODUCT,
  HIDE_PRODUCT
} from '../../constants';

const showProduct = () => ({
  type: SHOW_PRODUCT
});

const hideProduct = () => ({
  type: HIDE_PRODUCT
});

export {
  showProduct,
  hideProduct
};
