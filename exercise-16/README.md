# Exercise 16

## Legacy Side Effects

---

TODO

In older versions of React, components that maintained state or performed side-effects were required to be written with ES2015's Class Syntax.

With state & side-effect hooks available as of v16.8, functional components are generally preferred to class components. You'll probably come across components written with classes, though, so you should become accustomed to working with them.

In this exercise, you'll convert components from functions to classes. Until React version 16.8, this activity happened quite often during development, when components were changed from stateless to stateful.

👉 Start the app for Exercise 14

In a console window, pointed at the root of this project, run `npm run start-exercise-14`.

This should open a browser window pointed at localhost:3000, showing a web app titled "Exercise 14: Converting Components". If it doesn't, ask your neighbor for assistance or raise your hand.

### Background

In this exercise, we'll be converting two components from functional components to class components: `friends/Friends.js` and `friends/FriendProfile.js`. Then we'll convert them back to functional components, for practice.

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
