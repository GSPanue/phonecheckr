import React from 'react';
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
  location: PropTypes.object.isRequired
};

const Results = ({ location }) => {
  const query = getQuery(location);

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
