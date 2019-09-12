import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { getQuery, prepareResultsTableData } from '../../helpers';
import { getNumberOfResults } from './helpers';

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
  searchResults: PropTypes.array,
  show: PropTypes.bool.isRequired,
  fetchResults: PropTypes.func.isRequired,
  clearResults: PropTypes.func.isRequired
};

const defaultProps = {
  searchResults: null
};

const Results = ({
  location,
  searchResults,
  show,
  fetchResults,
  clearResults
}) => {
  const query = getQuery(location);

  useEffect(() => {
    if (!show) {
      fetchResults(query);
    }

    return (() => {
      if (show) {
        clearResults();
      }
    });
  }, [show]);

  if (show) {
    if (searchResults) {
      const preparedData = prepareResultsTableData(searchResults);
      const numberOfResults = getNumberOfResults(preparedData);

      return (
        <Wrapper>
          <Header />
          <Content>
            <TextContainer>
              <StyledText large>{`You searched for "${query}"`}</StyledText>
            </TextContainer>
            <TextContainer padding>
              <StyledText>Products&nbsp;</StyledText>
              <StyledText small danger>{`(${numberOfResults})`}</StyledText>
            </TextContainer>
            <ResultsTable items={preparedData} />
          </Content>
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <Header />
        <Content>
          <TextContainer column center>
            <StyledText large danger>{`No results found for "${query}"`}</StyledText>
            <StyledText small>Check your spelling or remove a keyword and try again!</StyledText>
          </TextContainer>
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
Results.defaultProps = defaultProps;

export default Results;
