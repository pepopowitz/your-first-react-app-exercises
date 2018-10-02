# Exercise 16
## React Context

### 

&#128073; Change the exported value in `./theme/static/index.js` from `purple` to `green`.

In your browser, you should see the theme change.

In `Header.js`, you'll see that we've added a component named `<ThemeSwitcher>`. This shows up in the UI as a button that says "Change Theme". We're going to hook theme-toggling up to this button, using React Context.


### Create a ThemeContext (just look at it)

`theme/context.js`

```js
export default React.createContext();
```

### Create a ThemeProvider (just look at it)

#### initialize state

```jsx
export default class ThemeProvider extends React.Component {
  state = {
    theme: 'purple',
  };

  // ...
}
```

#### handleThemeChange()

```jsx
export default class ThemeProvider extends React.Component {
  // ...

  handleThemeChange = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'green' ? 'purple' : 'green',
    }));
  };

  // ...
}
```

#### render()

```jsx
export default class ThemeProvider extends React.Component {
  // ...

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
```



### Wrap the app in a `<ThemeProvider>`


App.js: wrap app in `<ThemeProvider>` component

Solution: App: ThemeProvider

### Adding ThemeContext.Consumers

Consumers look like this:

```jsx
    <ThemeContext.Consumer>
      {(value) => (
        <MyComponent value={value} />
      }}
    </ThemeContext.Consumer>
```

Inside the inner function, your components can do whatever they need with the value passed in.

Remember that in our case, we have two properties on the `value` that we are interested in: the `theme` and an `onThemeChanged` handler. This means we could use object destructuring to write a consumer like this:

```jsx
    <ThemeContext.Consumer>
      {({theme, onThemeChanged}) => (
        <MyComponent value={value} />
      }}
    </ThemeContext.Consumer>
```


### Make the Switcher a Consumer

#### wrap in `<ThemeContext.Consumer>`

Solution: Switcher: ThemeContext.Consumer

#### connect button onClick to onThemeChanged

Solution: Switcher: onThemeChanged

### Make the Header a Consumer


`Header.js` - wrap `<header>` element in a `<ThemeContext.Consumer>` component.

Use the theme argument passed into the rendering function. Get rid of static theme.

Solution: Header: Consumer

### Test it out

At this point you should see the header color change when you click the button.

### Make the Page shared component a consumer

Solution: Page: Consumer

### Make the Card shared component a consumer

Solution: Card: Consumer

### Make the FriendFlipper a Consumer

renderFront() and renderBack()

Solution: FriendFlipper: Consumer