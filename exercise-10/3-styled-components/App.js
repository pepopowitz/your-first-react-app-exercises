import React, { Component } from 'react';
import styled from 'styled-components';
import Exercise from './Exercise';

import theme from './theme';

const AppDiv = styled.div`
  text-align: center;
`;
const AppHeader = styled.header`
  background-color: ${theme.dark};
  height: 100px;
  padding: 20px;
  color: ${theme.white};
`;
const Title = styled.h1`
  font-family: ${theme.font};
  line-height: 0.5em;
`;

class App extends Component {
  render() {
    return (
      <AppDiv>
        <AppHeader className="App-header">
          <Title>Exercise 10</Title>
          <h2>Styling - Styled Components</h2>
        </AppHeader>
        <div>
          <Exercise />
        </div>
      </AppDiv>
    );
  }
}

export default App;
