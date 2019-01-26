import styled from 'styled-components';

import Input from '../Input';

const classNames = {
  container: 'react-autosuggest__container',
  suggestionsContainerOpen: 'react-autosuggest__suggestions-container--open',
  suggestionsList: 'react-autosuggest__suggestions-list',
  suggestion: 'react-autosuggest__suggestion'
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ theme: { searchBar } }) => (searchBar.width)};
  height: ${({ theme: { searchBar } }) => (searchBar.height)};
  display: flex;
  align-items: center;
  padding: 0 5px 0 13px;
  border-radius: 2px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.06);
  background: ${({ theme: { searchBar } }) => (searchBar.primaryBackground)};

  .${classNames.container} {
    display: flex;
    flex: 1;
  }

  .${classNames.suggestionsContainerOpen} {
    margin-top: 52px;
  }

  .${classNames.suggestionsList} {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .${classNames.suggestion} {
    display: block;
  }
`;

const StyledInput = styled(Input)`
  flex: 1;
  z-index: 1;
`;

export {
  Wrapper,
  StyledInput
};
