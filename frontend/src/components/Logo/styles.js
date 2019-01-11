import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: ${({ size }) => (size)};
`;

const StyledFont = styled.span`
  font-weight: ${({ primary }) => ((primary) ? '700' : '300')};
  color: #${({ primary }) => ((primary) ? 'F44F4F' : '313131')};
`;

export {
  Wrapper,
  StyledFont
};
