import React from 'react';

import {
  Wrapper,
  TextContainer,
  StyledText
} from './styles';
import Header from '../../components/Header';
import Content from '../../components/Content';

const FourOhFour = () => (
  <Wrapper>
    <Header />
    <Content>
      <TextContainer column center>
        <StyledText large danger>404</StyledText>
        <StyledText small>The requested URL was not found on this server.</StyledText>
      </TextContainer>
    </Content>
  </Wrapper>
);

export default FourOhFour;
