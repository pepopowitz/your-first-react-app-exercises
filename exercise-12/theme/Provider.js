import React from 'react';

import ThemeContext from './context';

export default class ThemeProvider extends React.Component {
  state = {
    theme: 'purple',
  };

  handleThemeChange = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'green' ? 'purple' : 'green',
    }));
  };

  render() {
    const data = {
      theme: this.state.theme,
      onThemeChanged: this.handleThemeChange,
    };

    return (
      <ThemeContext.Provider value={data}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
