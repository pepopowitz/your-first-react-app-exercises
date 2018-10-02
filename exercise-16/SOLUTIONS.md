# Possible Solutions

## App: ThemeProvider

```jsx
import ThemeProvider from './theme/Provider';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider>
          <div className={styles.app}>
            // ...
          </div>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}
```

## Switcher: ThemeContext.Consumer

```jsx
import ThemeContext from './context';

export default function() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <button className={styles.switcher}>
          Change Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}
```

## Switcher: onThemeChanged
```jsx
import ThemeContext from './context';

export default function() {
  return (
    <ThemeContext.Consumer>
      {({ theme, onThemeChanged }) => (
        <button className={styles.switcher} onClick={onThemeChanged}>
          Change Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}
```

## Header: Consumer
```jsx
import ThemeContext from './theme/context';

export default function Header() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <header ... >
          ...
        </header
      )}
    </ThemeContext.Consumer>
  );
}
```

## Page: Consumer
```jsx
import ThemeContext from '../theme/context';

export default function Page({ children }) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className={classNames(styles.page, styles[theme])}>
          <div className={styles.content}>{children}</div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}
```

## Card: Consumer
```jsx
import ThemeContext from '../theme/context';

export default function Card({ children }) {
  return (
    <ThemeContext.Consumer>
      {({theme}) => (
        <div className={classNames(styles.card, styles[theme])}>{children}</div>
      )}
    </ThemeContext.Consumer>
  );
}
```

## FriendFlipper: Consumer
```jsx
import ThemeContext from '../theme/context';

export default class FriendFlipper extends React.Component {

  // ...

  renderFront() {
    const { friend } = this.props;
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div className={styles.front}>
            // ...
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }

  renderBack() {
    const { friend } = this.props;
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div className={styles.back}>
            // ...
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
```
