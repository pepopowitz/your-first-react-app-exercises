# Exercise 12

## React Context

In this exercise, we'll use React Context to manage application-level state. That is, state that applies to the entire application, instead of a single component (or a few closely-related components).

Throughout the workshop, you've seen the app alternate between green and purple themes. We're going to automate that, with a "theme switcher" button.

👉 Start the app for Exercise 12

In a console window, pointed at the root of this project, run `npm run start-exercise-12`.

This should open a browser window pointed at localhost:3000, showing a web app titled "Exercise 12: React Context", and our three adorable kitten friends in the purple theme. There is a button in the top right that says "Change Theme", but it doesn't do anything yet.

If you're not seeing this, ask your neighbor for assistance or raise your hand.

### Static theme

We've modified the CSS Modules coming into this exercise, so that they render based on a static theme. The static theme is defined in `./theme/static.js`. If you change the static theme, the UI will reflect it.

👉 Change the exported value in `./theme/static.js` from `green` to `purple`.

In your browser, you should see the theme change from green to purple.

### ThemeSwitcher

In `Header.js`, you'll see that we've rendered a new component named `<ThemeSwitcher>`. This shows up in the UI as a button that says "Change Theme". We're going to hook theme-toggling up to this `ThemeSwitcher` component, using React Context.

### React Context

The React Context API involves three players: a Context, a Provider, and many Consumers.

A **Context** is like a "namespace" for state in your React app. You can have multiple Contexts in a tree, each of them associated with its own data.

A **Provider** is associated with a Context. It sits at the top of a sub-tree of components, manages state for the sub-tree, and provides the value to any sub-components that need it.

Multiple **Consumers** exist in a sub-tree, beneath the Provider. Each of those consumers _subscribes_ to a Context, and has access to the state provided by the Provider.

### ThemeContext

For this exercise, we've already created the Context. It is named `ThemeContext`, and is located at `theme/context.js`.

👉 Open the `theme/context.js` file.

You should see this:

```js
import React from 'react';

export default React.createContext();
```

There isn't much happening here. The important thing is that it is calling `React.createContext()`, and exporting the result. When we want to create a Theme Provider or Theme Consumer, we'll need to reference this Theme Context.

### ThemeProvider

A Provider handles the state management for a Context, and sits atop a sub-tree of Consumers.

For this exercise, we've already created the Provider. It is named `ThemeProvider`, and it's located at `theme/Provider.js`.

👉 Open the `theme/Provider.js` file.

You should see a component that looks similar to other stateful components. It includes several pieces we've seen in previous exercises.

#### A `theme` State Property & `setTheme` State Modifier

The `ThemeProvider` calls `useState` to declare a state property & modifier. It initializes the state property to `purple`.

```jsx
export default function ThemeProvider(props) {
  const [theme, setTheme] = useState('purple');

  // ...
}
```

#### An Event Handler For State Change

The `ThemeProvider` includes a `handleThemeChange()` method, which updates the state of the Provider using `setState`.

This handler swaps the `theme` state property between `green` and `purple` each time it is called.

```jsx
export default function ThemeProvider(props) {
  // ...

  const handleThemeChange = () => {
    setTheme(theme === 'green' ? 'purple' : 'green');
  };

  // ...
}
```

#### Passing The State To Its Children

The `ThemeProvider` renders a `<ThemeContext.Provider>` element, with `props.children` inside of it.

A Context Provider passes the Context state down to its children via the `value` prop. The `value` prop can contain a single value, or it can contain an object if there are multiple values to pass down. The `value` prop should contain all state & handlers that any Consumers in the sub-tree would need.

In our case, we need to pass down the current theme, as well as our handler that toggles the theme from `green` to `purple`. Thus we create an object (`data`), and pass that into the rendered `<ThemeContext.Provider>`, instead of a single value.

```jsx
export default function ThemeProvider(props) {
  // ...

  const data = {
    theme: theme,
    onThemeChanged: handleThemeChange,
  };

  return (
    <ThemeContext.Provider value={data}>{props.children}</ThemeContext.Provider>
  );
}
```

### Wrap the app in a `<ThemeProvider>`

Having created a `ThemeProvider`, we need to wrap our component tree within it, so that it may pass the state throughout the app.

👉 Wrap the app in a `<ThemeProvider>` component, within `App.js`.

We want our entire app to have access to the ThemeContext, so we'll wrap the entire app in the `ThemeProvider`.

You'll want to import the `ThemeProvider`, and wrap the rendered `App` component within a `<ThemeProvider>` element.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#app-themeprovider).

### Adding ThemeContext.Consumers With `useContext`

Context Consumers are all of the components in a sub-tree that need access to the Context state. This might include components that are rendering the state to the DOM, but it might also include components that modify the state. We can put as many Consumers inside a sub-tree as we want. Each one of them has access to the state of the nearest Provider in its ancestry.

We'll use the `useContext` hook to attach consumers.

The `useContext` consumer takes a single argument: the Context object it wants to consume.

`useContext` returns a single object: the `value` passed down by the nearest Provider in the current component's ancestry.

Remember that in our case, we have two properties on the `value` that we are interested in: the `theme` and an `onThemeChanged` handler. A Consumer for our ThemeContext might look like this:

```jsx
import ThemeContext from './theme/context';

export default function MyComponent() {
  const value = useContext(ThemeContext);

  // Now we can do whatever we want with the value object.
  console.log(value.theme); // 'purple'
  console.log(value.onThemeChanged); // [FUNCTION] - the handler defined in our Provider.

  //...
}
```

### Make the Switcher a Consumer

The `Switcher` component is located at `theme/Switcher.js`. It is the button that toggles the theme from `green` to `purple`. In the context of our ThemeContext, that means it is a Consumer that needs to call the `onThemeChanged` handler.

👉 Modify the `Switcher` component to subscribe to the ThemeContext

You'll do this by calling `useContext`. Remember that the value returned by calling `useContext` contains all data that the ThemeProvider manages.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#switcher-useContext).

Subscribing to the ThemeContext gets us access to the `value` passed down from the `ThemeContext.Provider` - which includes an `onThemeChanged` handler. We need to connect our button to that handler.

👉 Within the `Switcher` component, connect the button `click` event to the `onThemeChanged` handler from the subscribed Context.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#switcher-onthemechanged).

### Make the Header a ThemeContext Consumer

We've hooked up the Consumer that _modifies_ the application-level state; now we need to connect the Consumers that _read_ the application-level state. This starts with the `Header` component, located at `Header.js`.

👉 Modify the `Header` component to subscribe to the ThemeContext, and utilize the `theme` property

The `Header` component uses a static theme, imported from `'./theme/static'`. We'll no longer need that.

Instead, use the theme from the value acquired by subscribing to the ThemeContext.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#header-consumer).

### Test it out

At this point you should see the header color change when you click the button.

If you don't, re-read the instructions above thoroughly. If you can't figure out what you missed, ask your neighbor, or raise your hand.

### Make the `Page` shared component a ThemeContext Consumer

The `Page` component, located at `shared/Page.js`, needs to also utilize the `theme` property from the ThemeContext.

👉 Modify the `Page` component to subscribe to the ThemeContext, and utilize the `theme` property

Reference the [Header](#make-the-header-a-themecontext-consumer) instructions if you can't remember how to make this happen.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#page-consumer).

### Make the `Card` shared component a ThemeContext Consumer

The `Card` component, located at `shared/Card.js`, needs to also utilize the `theme` property from the ThemeContext.

👉 Modify the `Card` component to subscribe to the ThemeContext, and utilize the `theme` property

Reference the [Header](#make-the-header-a-consumer) instructions if you can't remember how to make this happen.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#card-consumer).

### Make the `FriendFlipper` a ThemeContext Consumer

The `FriendFlipper` component, located at `friend-detail/FriendFlipper.js`, needs to also utilize the `theme` property from the ThemeContext.

👉 Modify the `FriendFlipper` component to subscribe to the ThemeContext, and utilize the `theme` property

Reference the [Header](#make-the-header-a-consumer) instructions if you can't remember how to make this happen.

This component has two child components - `<Front>` and `<Back>`. Both of these could individually be made Consumers, or you could make the `FriendFlipper` component a Consumer and pass the `theme` into `<Front>` and `<Back>`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friendflipper-consumer).

### Test it out

At this point your entire app should change from green to purple and vice versa when the "Change Theme" button is clicked.

If this doesn't happen, re-read the instructions above thoroughly. If you can't figure out what you missed, ask your neighbor, or raise your hand.

### Extra Credit

[Read about when to use React Context](https://reactjs.org/docs/context.html#when-to-use-context). Note that these docs show a different syntax for subscribing to a React Context than `useContext`. The syntax in the docs is a legacy syntax, which we'll learn about later.

[Read about React Context vs Redux, another option for managing application-level state.](https://daveceddia.com/context-api-vs-redux/). Note that this article also uses the legacy syntax for subscribing to a React Context.
