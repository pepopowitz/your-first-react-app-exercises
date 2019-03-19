# Exercise 15

## Legacy State Management

Prior to the "hooks" release of React (v16.8), components could only manage state if they were class components. Stateful class components used `setState` and instance properties to manage their state.

When building React components, it's preferable to use functional components & `useState` to manage state. You'll probably come across stateful class components in existing apps, though, so you should be familiar with them.

In this exercise, you'll compare a functional component that uses `useState` to a class component that uses `setState` and instance properties.

👉 Open files for Exercise 15

In your text editor, pull up the `modern/Provider.js` and `legacy/Provider.js` files. You will want to view them side by side, or diff them.

These two components function equivalently. You could substitute either into our app, with no noticeable differences. Let's look at the differences in how they're written.

### Class Syntax

The modern component is written as a function; the legacy component is a class that extends `React.Component`.

Until the "hooks" release of React, this was required for components that needed to manage state.

Because the legacy component is a class, you'll notice that

- it has a `render()` method, which returns the JSX to render
- it references props in the `render()` method with `this.props`
- it references `this.state` to access the component's state

### Initializing State

To initialize state in a stateful class component, a class property named `state` is added. The syntax might look strange:

```jsx
export default class ThemeProvider extends React.Component {
  state = {
    theme: 'green',
  };

  // ...
}
```

This is an "instance property". ES2015 class syntax reads this as "a property on an instance of `ThemeProvider`, whose default value is an object with the `theme` property set to `'green'`." It's pretty similar to how you would define an instance property in an object-oriented language like C# or Java, and it functions similarly.

In a stateful class component, we put all state properties in one object named `state`. In a functional component, we call `useState` for each individual state property that we want to maintain.

### Event Handlers

The legacy `handleThemeChange` event handler is defined with syntax that matches the modern component:

```jsx
handleThemeChange = () => {
  // ...
};
```

While they are defined the same way, there's one subtle detail that is extra important for the legacy component. This handler is defined as a class _property_, not a class _method_ - and then it's assigned a fat arrow function as a value.

Notice the subtle difference between these two declarations in our class:

```jsx
class ThemeProvider extends React.Component {
  handleThemeChange = () => {...}

  render() {...}
}
```

These are both functions that get called on an instance of a class, and we will likely want to access `this.props` or `this.state` inside of them. React knows when you define a component that you will give it a `render` method - you **have** to. As a result, React can take care of binding the method to your current instance of the component. React _doesn't_ know about any non-standard methods that you define on the instance, so it is up to you to bind those to the current instance of the component.

Defining a handler as an instance _property_ assigned a function as a value is **one** way to bind it to the component instance - like we're doing with `handleThemeChange` above. There are other ways, but this the preferred way for me & many others.

If you define an event handler without also binding it, you will receive a run-time error when the handler references `this.state` or `this.props`.

### Updating State

In the modern functional component, when we want to update a state property, we call the state modifier - in `modern/Provider.js`, that's `setTheme`.

Stateful class components have one state modifier function to update _all_ state. When we want to update the state of our component, we call `this.setState()`. You can see this in `handleThemeChanged` of `legacy/Provider.js`. We call `this.setState()` with an updated theme, toggled from the previous theme:

```jsx
handleThemeChange = () => {
  this.setState({ theme: this.state.theme === 'green' ? 'purple' : 'green' });
};
```

#### `setState` Merges State

When we pass an object as the argument to `this.setState`, React will merge the component state with our updates.

If we initialized our state like this:

```jsx
class MyComponent extends React.Component {
  state = {
    name: 'Turtle',
    color: 'gray',
  };

  // ...
}
```

And we called `setState` like this:

```jsx
class MyComponent extends React.Component {
  // ...
  someHandler = () => {
    this.setState({ name: 'Potatoes' });
  };
  // ...
}
```

Our component state would update to contain these values:

```jsx
{
  name: 'Potatoes', // this value gets updated
  color: 'gray' // this value is untouched
}
```

### `setState` Is Asynchronous

In our `handleThemeChange` handler, we're referencing `this.state.theme` to determine the next value of `theme`. This is actually a bad practice, as `setState` is asynchronous, and we can't predict when our call will actually execute. Code like this can result in unpredictable state updates.

When you want to update the state of a class component based on `this.state` or `this.props`, you should use a form of `setState` that takes a function as the only argument.

This function will pass the previous state and previous props as arguments, and you should return the updated state based on them. An example is commented out on line 13 of `legacy/Provider.js`. Uncommented, our handler would look like this:

```jsx
handleThemeChange = () => {
  this.setState(prevState => {
    return { theme: prevState.theme === 'green' ? 'purple' : 'green' };
  });
};
```

[You can read more about this issue in the React docs](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous).

### Extra Credit

[Read about passing functions as event handlers](https://reactjs.org/docs/faq-functions.html).

[Read about state management in the React docs](https://reactjs.org/docs/state-and-lifecycle.html).
