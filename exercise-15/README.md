# Exercise 15

## Legacy State Management

Previous to the "hooks" release of React (v16.8), components could only manage state if they were class components. Stateful class components used `setState` and instance properties to manage their state.

When building React components, it's preferable to use functional components & `useState` to manage state. You'll probably come across stateful class components in existing apps, though, so you should be familiar with them.

In this exercise, you'll convert a functional component that uses `useState` to a class component that uses `setState` and instance properties.

👉 Start the app for Exercise 15

In a console window, pointed at the root of this project, run `npm run start-exercise-15`.

This should open a browser window pointed at localhost:3000, showing a web app titled "Exercise 15: Legacy State Management". If it doesn't, ask your neighbor for assistance or raise your hand.

### Background

In this exercise, we'll convert the `theme/Provider.js` component from a functional component to a stateful class component.

- Class Syntax
- render()
  - this.props
- Initializing State
- Event handlers as instance methods (handleThemeChange)
- Functional updater of setState as a more async-safe way

---

todo

Class components use ES2015's Class Syntax. A class component must extend `React.Component`, and it must implement a `render()` method, which returns the JSX to render to the DOM.

### The Process

When converting from a functional component to a class component, there are three things that need to be done:

#### 1. Convert the function to a class that extends React.Component

For example,

```jsx
function FriendProfile(props) {
  // ...
}
```

becomes

```jsx
class FriendProfile extends React.Component {
  // ...
}
```

#### 2. Add a `render()` method

The `render()` method returns the JSX that the component wants to render, just like the return value of a functional component.

For example,

```jsx
function FriendProfile(props) {
  return <div>Hello!</div>;
}
```

becomes

```jsx
class FriendProfile extends React.Component {
  render() {
    return <div>Hello!</div>;
  }
}
```

#### 3. Convert `props` references to `this.props`.

While a functional component has props passed in as an argument, a class component accesses them as a `props` object on the instance of the class - `this.props`.

For example,

```jsx
{
  props.name;
}
```

becomes

```jsx
{
  this.props.name;
}
```

That's all it takes to convert from a class component to a stateless functional one!

👉 Convert the `FriendProfile` component from a stateless functional component to a class component

Check your browser to make sure the components are still rendering properly!

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friendprofile-to-class).

👉 Convert the `Friends` component from a stateless functional component to a class component

The functional `Friends` component calls a function named `renderFriends()`. You could leave this as a standalone function, or you could make it another method on the `Friends` class. If you choose to make it another method, remember that you'll need to specify `this.` when you call it.

Check your browser to make sure the components are still rendering properly!

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friends-to-class).

Let's also practice converting in the other direction - from class component to functional component.

👉 Convert the `FriendProfile` component back to a functional component

Check your browser to make sure the components are still rendering properly!

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friendprofile-to-functional).

👉 Convert the `Friends` component back to a functional component

Check your browser to make sure the components are still rendering properly!

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friends-to-functional).

### Extra Credit

[Read about how function components are different from classes](https://overreacted.io/how-are-function-components-different-from-classes/).
