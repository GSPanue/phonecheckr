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
  showProgressBar: PropTypes.func.isRequired,
  hideProgressBar: PropTypes.func.isRequired,
  showResults: PropTypes.func.isRequired,
  hideResults: PropTypes.func.isRequired
};

const Results = ({
  location,
  show,
  showProgressBar,
  hideProgressBar,
  showResults,
  hideResults
}) => {
  const query = getQuery(location);

  useEffect(() => {
    if (!show) {
      showProgressBar();

      /**
       * @ToDo Fetch results here before hiding progress bar
       * and showing the result(s).
       */
      setTimeout(() => {
        hideProgressBar();
        showResults();
      }, 500);
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
            <StyledText small light>(100+)</StyledText>
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
