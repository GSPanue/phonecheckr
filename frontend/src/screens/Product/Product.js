import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  InnerContent,
  TextContainer,
  Title,
  Description
} from './styles';
import Header from '../../components/Header';
import ProgressBar from '../../components/ProgressBar';
import Content from '../../components/Content';
import BackButton from '../../components/BackButton';
import Range from '../../components/Range';
import StorageDropdown from '../../components/StorageDropdown';

const propTypes = {
  show: PropTypes.bool.isRequired,
  showBackButton: PropTypes.bool.isRequired,
  fetchProduct: PropTypes.func.isRequired,
  clearProduct: PropTypes.func.isRequired
};

/**
 * @todo Remove placeholder text
 */
const Product = ({
  show,
  showBackButton,
  fetchProduct,
  clearProduct
}) => {
  useEffect(() => {
    if (!show) {
      fetchProduct();
    }

    return (() => {
      if (show) {
        clearProduct();
      }
    });
  }, [show]);

  if (show) {
    return (
      <Wrapper>
        <Header />
        <Content>
          {(showBackButton) && <BackButton />}
          <InnerContent>
            <img height="300" width="300" src="https://images.pricerunner.com/product/600x600/1599071093/Apple-iPhone-6S-32GB.jpg?c=0.7" alt="d" />
            <TextContainer>
              <Title>Apple iPhone 6s</Title>
              <Description>Apple iOS, 4.7&quot;, Release Year 2016, 12 MP, 143g, 4G LTE, 3G, HSPA, EDGE, GPRS, Wi-Fi, NFC, Bluetooth, 2G, VoLTE, DC-HSPA, HSPA+</Description>
              <Range from="239.99" to="460.24" />
              <StorageDropdown storageOptions={['16GB', '32GB']} />
            </TextContainer>
          </InnerContent>
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
