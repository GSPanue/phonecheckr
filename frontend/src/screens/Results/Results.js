import React from 'react';
import PropTypes from 'prop-types';

import { getQuery } from '../../helpers';

import {
  Wrapper,
  QueryContainer,
  Query,
  ProductCountContainer,
  ProductCount
} from './styles';
import Header from '../../components/Header';
import Content from '../../components/Content';

const propTypes = {
  location: PropTypes.object.isRequired
};

const Results = ({ location }) => {
  const query = getQuery(location);

  return (
    <Wrapper>
      <Header />
      <Content>
        <QueryContainer>
          You searched for&nbsp;
          <Query>
            &quot;
            {query}
            &quot;
          </Query>
        </QueryContainer>
        <ProductCountContainer>
          Products&nbsp;
          <ProductCount>
            (100+)
          </ProductCount>
        </ProductCountContainer>
      </Content>
    </Wrapper>
  );
};

Results.propTypes = propTypes;

export default Results;
