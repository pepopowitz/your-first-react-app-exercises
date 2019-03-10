import React from 'react';
import styled from 'styled-components';

import theme from './theme';

const PageDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: repeating-linear-gradient(to top, ${theme.light}, ${theme.dark});
  height: calc(100vh - 140px);
`;

const ContentDiv = styled.div`
  background-color: ${theme.white};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height: calc(100vh - 140px);
  width: 1000px;
`;

export default function Page({ children }) {
  return (
    <PageDiv>
      <ContentDiv>{children}</ContentDiv>
    </PageDiv>
  );
}
