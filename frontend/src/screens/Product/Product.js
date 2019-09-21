import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { getProduct, prepareProductTableData } from '../../helpers/app';

import {
  Wrapper,
  InnerContent,
  StyledImg,
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
  range: PropTypes.array.isRequired,
  deals: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired,
  showBackButton: PropTypes.bool.isRequired,
  fetchProduct: PropTypes.func.isRequired,
  clearProduct: PropTypes.func.isRequired
};

const Product = ({
  location,
  show,
  image,
  name,
  description,
  range,
  deals,
  error,
  showBackButton,
  fetchProduct,
  clearProduct
}) => {
  useEffect(() => {
    if (!show && !error) {
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
    const preparedData = prepareProductTableData(deals);

    return (
      <Wrapper>
        <Header />
        <Content>
          {(showBackButton) && <BackButton />}
          <InnerContent>
            <StyledImg src={image} alt={name} />
            <TextContainer>
              <Title>{name}</Title>
              <Description>{description}</Description>
              <Range from={range[0]} to={range[1]} />
            </TextContainer>
          </InnerContent>
          <ResultsTable type="product" items={preparedData} />
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
