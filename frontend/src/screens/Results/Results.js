import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { getQuery } from '../../helpers';

import {
  Wrapper,
  QueryContainer,
  ProductCountContainer,
  StyledText
} from './styles';
import Header from '../../components/Header';
import Content from '../../components/Content';
import ProgressBar from '../../components/ProgressBar';

const propTypes = {
  location: PropTypes.object.isRequired,
  showProgressBar: PropTypes.func.isRequired,
  hideProgressBar: PropTypes.func.isRequired
};

const Results = ({ location, showProgressBar, hideProgressBar }) => {
  const query = getQuery(location);

  useEffect(() => {
    // Show progress bar
    showProgressBar();

    // Hide progress bar after fetching data
    setTimeout(() => {
      hideProgressBar();
    }, 5000);
  });

  return (
    <Wrapper>
      <Header />
      <ProgressBar />
      <Content>
        <QueryContainer>
          You searched for&nbsp;
          <StyledText>
            &quot;
            {query}
            &quot;
          </StyledText>
        </QueryContainer>
        <ProductCountContainer>
          Products&nbsp;
          <StyledText>
            (100+)
          </StyledText>
        </ProductCountContainer>
      </Content>
    </Wrapper>
  );
};

Results.propTypes = propTypes;

export default Results;
