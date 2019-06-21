import { connect } from 'react-redux';

import {
  fetchProduct,
  hideProduct
} from '../../actions';

import Product from './Product';

const mapStateToProps = ({ product }) => {
  const { show } = product;

  return ({
    show
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: () => dispatch(fetchProduct()),
  hideProduct: () => dispatch(hideProduct())
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
