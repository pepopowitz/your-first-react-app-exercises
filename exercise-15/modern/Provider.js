import React, { useState } from 'react';

import ThemeContext from './context';

export default function ThemeProvider(props) {
  const [theme, setTheme] = useState('green');

  const handleThemeChange = () => {
    setTheme(theme === 'green' ? 'purple' : 'green');
  };

  const data = {
    theme: theme,
    onThemeChanged: handleThemeChange,
  };

  return (
    <ThemeContext.Provider value={data}>{props.children}</ThemeContext.Provider>
  );
}
