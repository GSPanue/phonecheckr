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
  searchResults: PropTypes.object,
  show: PropTypes.bool.isRequired,
  fetchResults: PropTypes.func.isRequired,
  hideResults: PropTypes.func.isRequired
};

const defaultProps = {
  searchResults: null
};

const Results = ({
  location,
  searchResults,
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
    if (searchResults) {
      return (
        <Wrapper>
          <Header />
          <Content>
            <TextContainer>
              <StyledText large>{`You searched for "${query}"`}</StyledText>
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
        <Content>
          <TextContainer center>
            <StyledText large>{`No results found for "${query}"`}</StyledText>
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
