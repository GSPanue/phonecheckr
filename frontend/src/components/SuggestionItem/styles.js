import React from 'react';
import styled from 'styled-components';

import MenuItem from '@material-ui/core/MenuItem';

const Wrapper = styled((props) => (
  <MenuItem classes={{ selected: 'selected' }} {...props} />
))`
  && {
    ${({ theme: { suggestionItem, ripple } }) => (`
      height: ${suggestionItem.height};
      font-size: ${suggestionItem.fontSize};

      &&:hover {
        background-color: ${ripple.primaryColor}30;
      }

      &.selected {
        background-color: ${ripple.primaryColor}5c;
      }
    `)}
  }
`;

const StyledText = styled.span`
  ${({ bold, theme: { text } }) => (bold) && `font-weight: ${text.bold};`}
`;

export {
  Wrapper,
  StyledText
};
