import { connect } from 'react-redux';

import { updateStorage } from '../../actions';

import StorageDropdown from './StorageDropdown';

const mapStateToProps = ({ product }) => {
  const { storage } = product;

  return ({
    value: storage
  });
};

const mapDispatchToProps = (dispatch) => ({
  updateStorage: (size) => dispatch(updateStorage(size))
});

export default connect(mapStateToProps, mapDispatchToProps)(StorageDropdown);
