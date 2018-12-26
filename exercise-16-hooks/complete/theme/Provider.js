import React, { useState } from 'react';

import ThemeContext from './context';

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('purple');

  const onThemeChanged = () => setTheme(theme === 'green' ? 'purple' : 'green');

  const data = {
    theme,
    onThemeChanged,
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
}
