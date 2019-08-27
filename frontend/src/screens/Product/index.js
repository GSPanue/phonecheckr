import { connect } from 'react-redux';

import {
  fetchProduct,
  clearProduct
} from '../../actions';

import Product from './Product';
import withLocation from '../../components/withLocation';

const mapStateToProps = ({ product, history }) => {
  const { previousLocation } = history;

  return ({
    ...product,
    showBackButton: previousLocation !== null
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (id) => dispatch(fetchProduct(id)),
  clearProduct: () => dispatch(clearProduct())
});

export default connect(mapStateToProps, mapDispatchToProps)(withLocation(Product));
