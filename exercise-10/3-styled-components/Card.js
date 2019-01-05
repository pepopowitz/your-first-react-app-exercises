import React from 'react';
import styled from 'styled-components';

import theme from './theme';

const Wrapper = styled.div`
  min-width: 150px;
  background-color: ${theme.light};
  margin: 20px;
  padding: 30px;
  box-shadow: 0 1px 2px ${theme.dark};
  &:hover {
    box-shadow: 0 2px 4px ${theme.dark};
  }
`;

export default function Card({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
