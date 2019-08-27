import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { getProduct } from '../../helpers';

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
import ResultsTable from '../../components/ResultsTable';

const propTypes = {
  location: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  range: PropTypes.object.isRequired,
  results: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired,
  showBackButton: PropTypes.bool.isRequired,
  fetchProduct: PropTypes.func.isRequired,
  clearProduct: PropTypes.func.isRequired
};

/**
 * @todo Remove placeholder text
 */
const Product = ({
  location,
  show,
  image,
  name,
  description,
  range,
  results,
  error,
  showBackButton,
  fetchProduct,
  clearProduct
}) => {
  useEffect(() => {
    if (!show) {
      const id = getProduct(location);

      fetchProduct(id);
    }

    return (() => {
      if (show || error) {
        clearProduct();
      }
    });
  }, [show, error]);

  if (error) {
    return (
      <Redirect to="/404" />
    );
  }

  if (show) {
    return (
      <Wrapper>
        <Header />
        <Content>
          {(showBackButton) && <BackButton />}
          <InnerContent>
            <img height="300" width="300" src={image} alt={name} />
            <TextContainer>
              <Title>{name}</Title>
              <Description>{description}</Description>
              <Range from={range.from} to={range.to} />
            </TextContainer>
          </InnerContent>
          <ResultsTable type="product" items={results} />
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
