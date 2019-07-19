import { connect } from 'react-redux';

import {
  fetchProduct,
  clearProduct
} from '../../actions';

import Product from './Product';
import withLocation from '../../components/withLocation';

const mapStateToProps = ({ product, history }) => {
  const { show } = product;
  const { prevLocation } = history;

  return ({
    show,
    showBackButton: prevLocation !== null
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: () => dispatch(fetchProduct()),
  clearProduct: () => dispatch(clearProduct())
});

export default connect(mapStateToProps, mapDispatchToProps)(withLocation(Product));
