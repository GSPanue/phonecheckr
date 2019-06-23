import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import Header from '../../components/Header';
import ProgressBar from '../../components/ProgressBar';
import Content from '../../components/Content';
import BackButton from '../../components/BackButton';

const propTypes = {
  show: PropTypes.bool.isRequired,
  fetchProduct: PropTypes.func.isRequired,
  hideProduct: PropTypes.func.isRequired
};

const Product = ({ show, fetchProduct, hideProduct }) => {
  useEffect(() => {
    if (!show) {
      fetchProduct();
    }

    return (() => {
      if (show) {
        hideProduct();
      }
    });
  }, [show]);

  if (show) {
    return (
      <Wrapper>
        <Header />
        <Content>
          <BackButton />
          Product
        </Content>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Header />
      <ProgressBar />
    </Wrapper>
  );
};

Product.propTypes = propTypes;

export default Product;
