import React from 'react';
import PropTypes from 'prop-types';

import { getQuery } from '../../helpers';

import { Wrapper, Content, Heading, Query } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const propTypes = {
  location: PropTypes.object.isRequired
};

const Results = ({ location }) => {
  const query = getQuery(location);

  return (
    <Wrapper>
      <Header />
      <Content>
        <Heading>
          You searched for&nbsp;
          <Query>
            &quot;
            {query}
            &quot;
          </Query>
        </Heading>
      </Content>
      <Footer />
    </Wrapper>
  );
};

Results.propTypes = propTypes;

export default Results;
