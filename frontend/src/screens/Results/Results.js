import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { getQuery } from '../../helpers';

import {
  Wrapper,
  TextContainer,
  StyledText
} from './styles';
import Header from '../../components/Header';
import Content from '../../components/Content';
import ProgressBar from '../../components/ProgressBar';
import ResultsTable from '../../components/ResultsTable';

const propTypes = {
  location: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  fetchResults: PropTypes.func.isRequired,
  hideResults: PropTypes.func.isRequired
};

const Results = ({
  location,
  show,
  fetchResults,
  hideResults
}) => {
  const query = getQuery(location);

  useEffect(() => {
    if (!show) {
      fetchResults(query);
    }

    return (() => {
      if (show) {
        hideResults();
      }
    });
  }, [show]);

  if (show) {
    return (
      <Wrapper>
        <Header />
        <Content>
          <TextContainer>
            <StyledText large>You searched for&nbsp;</StyledText>
            <StyledText large>
              &quot;
              {query}
              &quot;
            </StyledText>
          </TextContainer>
          <TextContainer padding>
            <StyledText>Products&nbsp;</StyledText>
            <StyledText small danger>(100+)</StyledText>
          </TextContainer>
          <ResultsTable />
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

Results.propTypes = propTypes;

export default Results;
