import { connect } from 'react-redux';

import {
  fetchProduct,
  clearProduct
} from '../../actions';

import Product from './Product';
import withLocation from '../../components/withLocation';

const mapStateToProps = ({ product, history }) => {
  const { show } = product;
  const { previousLocation } = history;

  return ({
    show,
    showBackButton: previousLocation !== null
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: () => dispatch(fetchProduct()),
  clearProduct: () => dispatch(clearProduct())
});

export default connect(mapStateToProps, mapDispatchToProps)(withLocation(Product));
