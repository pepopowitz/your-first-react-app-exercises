# Possible Solutions

## App: ThemeProvider

```jsx
import ThemeProvider from './theme/Provider';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className={styles.app}>// ...</div>
      </ThemeProvider>
    </BrowserRouter>
  );
}
```

## Switcher: useContext

```jsx
HERE;
import React, { useContext } from 'react';
import ThemeContext from '../theme/context';

// ...

export default function() {
  const value = useContext(ThemeContext);

  return <button className={styles.switcher}>Change Theme</button>;
}
```

## Switcher: onThemeChanged

```jsx
export default function() {
  const value = useContext(ThemeContext);

  return (
    <button className={styles.switcher} onClick={value.onThemeChanged}>
      Change Theme
    </button>
  );
}
```

## Header: Consumer

```jsx
import React, { useContext } from 'react';
// import theme from './theme/static'; // no longer needed
// ...
import ThemeContext from './theme/context';
// ...

export default function Header() {
  const {theme} = useContext(ThemeContext);
  return (
    // ...
  );
}
```

## Page: Consumer

```jsx
export default function Page({ children }) {
  const {theme} = useContext(ThemeContext);

  return (
    // ...
  );
}
```

## Card: Consumer

```jsx
export default function Card({ children }) {
  const {theme} = useContext(ThemeContext);
  return (
    // ...
  );
}
```

## FriendFlipper: Consumer

```jsx
function Front(props) {
  const { theme } = useContext(ThemeContext);
  const { friend, setFlipped } = props;

  return (
    // ...
  );
}

function Back(props) {
  const { theme } = useContext(ThemeContext);
  const { friend, setFlipped } = props;

  return (
    // ...
  );
}
```
