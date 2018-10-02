# Exercise 16
## React Context

In this exercise, we'll use React Context to manage application-level state. That is, state that applies to the entire application, instead of a single component (or a few closely-related components).

Throughout the workshop, you've seen the app alternate between green and purple themes. We're going to automate that, with a "theme switcher" button.

&#128073; Start the app for Exercise 15

In a console window, pointed at the root of this project, run `npm run start-exercise-15`.

This should open a browser window pointed at localhost:3000, showing a web app titled "Exercise 15: Loading Data", and our three adorable kitten friends in the purple theme. If it doesn't, ask your neighbor for assistance or raise your hand.

### Static theme

We've modified the CSS Modules coming into this exercise, so that they render based on a static theme. The static theme is defined in `./theme/static/index.js`. If you change the static theme, the UI will reflect it.

&#128073; Change the exported value in `./theme/static/index.js` from `purple` to `green`.

In your browser, you should see the theme change from purple to green.

### ThemeSwitcher

In `Header.js`, you'll see that we've rendered a new component named `<ThemeSwitcher>`. This shows up in the UI as a button that says "Change Theme". We're going to hook theme-toggling up to this `ThemeSwitcher` component, using React Context.

### React Context

The React Context API involves three players: a Context, a Provider, and many Consumers.

The Context defines that we will use a specific type of context in our app.

### ThemeContext

For this exercise, we've already created the Context. It is named `ThemeContext`, and is located at `theme/context.js`.

&#128073; Open the `theme/context.js` file.

You should see this: 

```js
import React from 'react';

export default React.createContext();
```

There isn't much happening here. The important thing is that it is calling `React.createContext()`, and exporting the result. When we want to create a Provider or Consumer, we'll need to use this Context.

### ThemeProvider

A Provider handles the state management for a Context.

For this exercise, we've already created the Provider. It is named `ThemeProvider`, and it's located at `theme/Provider.js`.

&#128073; Open the `theme/Provider.js` file.

You should see a component that looks similar to other stateful components. It includes several pieces we've seen in previous exercises.

#### State Initialization

The `ThemeProvider` initializes its state, so that the `theme` is defaulted to `purple`.

```jsx
export default class ThemeProvider extends React.Component {
  state = {
    theme: 'purple',
  };

  // ...
}
```

#### Handle State Change

The `ThemeProvider` includes a `handleTimeChange()` method, which updates the state of the Context using `setState`. 

This handler is swapping the value of `this.state.theme` between `green` and `purple` each time it is called.

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

The last thing the `ThemeProvider` does is render the current state. 

A Context Provider passes the state down to its children via the `value` prop. The `value` prop can contain a single value, or it can contain an object if there are multiple values to pass down.

In this case, we need to pass down the current theme, as well as our handler that toggles the theme from `green` to `purple`. Thus we create an object (`data`), and pass that into the rendered `<ThemeContext.Provider>`, instead of a single value.

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

Inside the `<ThemeContext.Provider>` is rendered the children passed into the provider. This allows the Provider to wrap a component tree, and pass the state down to all of its children.

### Wrap the app in a `<ThemeProvider>`

Having created a `ThemeProvider`, we need to wrap our component tree within it, so that it may pass the state throughout the app.

&#128073; Wrap the app in a `<ThemeProvider>` component, within `App.js`.

We want our entire app to have access to the ThemeContext, so we'll wrap the entire app in the `ThemeProvider`.

You'll want to import the `ThemeProvider`, and wrap the rendered `App` component within a `<ThemeProvider>` element.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#app-themeprovider).

### Adding ThemeContext.Consumers

Now that we've wrapped the app in the `ThemeProvider`, we can attach Consumers anywhere down the tree.

Consumers look like this:

```jsx
import ThemeContext from './theme/context';

export default function MyComponent() {
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <MyComponent value={value} />
      )}
    </ThemeContext.Consumer>
  )
}
```

The child of the `<ThemeContext.Consumer>` is a function. It takes an argument that contains the `value` that was passed down by the `ThemeContext.Provider`.

Inside the inner function, your components can do whatever they need with the value passed in.

Remember that in our case, we have two properties on the `value` that we are interested in: the `theme` and an `onThemeChanged` handler. This means we could use object destructuring to write a consumer like this:

```jsx
import ThemeContext from './theme/context';

export default function MyComponent() {
  return (
    <ThemeContext.Consumer>
      {({theme, onThemeChanged}) => (
        <MyComponent value={value} />
      }}
    </ThemeContext.Consumer>
  )
}
```

### Make the Switcher a Consumer

The `Switcher` component is located at `theme/Switcher.js`. It is the button that toggles the theme from `green` to `purple`. In the context of our ThemeContext, that means it is a Consumer that needs to call the `onThemeChanged` handler.

&#128073; Wrap the `Switcher` component in `<ThemeContext.Consumer>`

If you get stuck, [see a possible solution here](./SOLUTIONS.md#switcher-themecontext.consumer).

Wrapping in `<ThemeContext.Consumer>` gets us access to the `value` passed down from the `ThemeContext.Provider` - which includes an `onThemeChanged` handler. We need to connect our button to that handler.

&#128073; Within the `Switcher` component, connect the button `click` event to the `onThemeChanged` handler passed into the rendering function.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#switcher-onthemechanged).

### Make the Header a Consumer

We've hooked up the Consumer that modifies the application-level state; now we need to connect the Consumers that read the application-level state. This starts with the `Header` component, located at `Header.js`.

&#128073; Wrap the `Header` component's `<header>` element in a `<ThemeContext.Consumer>` component.

Wrapping in `<ThemeContext.Consumer>` gets us access to the `value` passed down from the `ThemeContext.Provider` - which includes a `theme` property. We need to connect our header to that property.

Now that we're using the `theme` passed into the rendering function, we no longer need the static theme imported from `./theme/static`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#header-consumer).

### Test it out

At this point you should see the header color change when you click the button.

If you don't, re-read the instructions above thoroughly. If you can't figure out what you missed, ask your neighbor, or raise your hand.

### Make the `Page` shared component a `ThemeContext.Consumer`

The `Page` component, located at `shared/Page.js`, needs to also utilize the `theme` property from the ThemeContext.

&#128073; Modify the `Page` component to be a `<ThemeContext.Consumer>`, utilizing the `theme` property in its rendering function. 

Reference the [Header](#make-the-header-a-consumer) instructions if you can't remember how to make this happen.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#page-consumer).

### Make the `Card` shared component a `ThemeContext.Consumer`

The `Card` component, located at `shared/Card.js`, needs to also utilize the `theme` property from the ThemeContext.

&#128073; Modify the `Card` component to be a `<ThemeContext.Consumer>`, utilizing the `theme` property in its rendering function. 

Reference the [Header](#make-the-header-a-consumer) instructions if you can't remember how to make this happen.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#card-consumer).

### Make the `FriendFlipper` a `ThemeContext.Consumer`

The `FriendFlipper` component, located at `friend-detail/FriendFlipper.js`, needs to also utilize the `theme` property from the ThemeContext.

&#128073; Modify the `FriendFlipper` component to be a `<ThemeContext.Consumer>`, utilizing the `theme` property in its rendering function. 

Reference the [Header](#make-the-header-a-consumer) instructions if you can't remember how to make this happen.

In this component, there is a `renderFront()` and `renderBack()` method. Both of these could individually be made Consumers, or you could make the overall `render()` method a Consumer and pass the `theme` into `renderFront()` and `renderBack()`. 

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friendflipper-consumer).

### Test it out

At this point your entire app should change from green to purple and vice versa when the "Change Theme" button is clicked.

If this doesn't happen, re-read the instructions above thoroughly. If you can't figure out what you missed, ask your neighbor, or raise your hand.
