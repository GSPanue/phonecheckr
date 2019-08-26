import styled from 'styled-components';

import Input from '../Input';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 5px 0 13px;
  border-radius: 2px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.06);

  ${({ primary, theme: { searchBar } }) => (`
    max-width: ${searchBar.width};
    height: ${searchBar.height};
    background: ${((primary) ? searchBar.primaryBackground : searchBar.secondaryBackground)};
  `)}
`;

const StyledInput = styled(Input)`
  flex: 1;
  z-index: 1;
`;

export {
  Wrapper,
  StyledInput
};
