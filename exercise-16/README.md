# Exercise 16

## Legacy Side Effects

---

Prior to the "hooks" release of React (v16.8), writing a stateful component required using classes. To run side-effects with these components, there were a few lifecycle events that every class component offered.

When building React components, it's preferable to use functional components & `useEffect` to run side-effects. You'll probably come across class components that use lifecycle events in existing apps, though, so you should be familiar with them.

In this exercise, you'll compare a functional component that uses `useState` and `useEffect` to a class component that uses `setState` and lifecycle events.

👉 Open files for Exercise 16

In your text editor, pull up the `modern/Friends.entry.js` and `legacy/Friends.entry.js` files. You will want to view them side by side, or diff them.

These two components function equivalently. You could substitute either into our app, with no noticeable differences. Let's look at the differences in how they're written.

### State Management

Not all components that perform side-effects also maintain state, but many do. Ours is an example of one that does: the side-effect is performed to gather data from an API, which is then stored in component state.

#### `modern/Friends.entry.js`

In our modern component, you can see us using `useState` to manage an array of friends.

```jsx
const [friends, setFriends] = useState([]);
```

See [Exercise 9](../exercise-9/README.md) for a refresher on `useState`.

#### `legacy/Friends.entry.js`

In the legacy component, we are using a class property named `state` to manage an array of friends.

```jsx
state = {
  friends: [],
};
```

View [Exercise 15](../exercise-15/README.md) for a refresher on legacy state management.

### Side Effects

The side effect we need to run in this component calls out to an API to retrieve a list of friends, then updates the state of the component with the results.

#### `modern/Friends.entry.js`

In our modern component, we are using `useEffect` to perform this side-effect. It calls out to `getFriendsFromApi` to get the list of friends, then calls the state modifier `setFriends` with the result.

```jsx
useEffect(async () => {
  const friends = await getFriendsFromApi();
  setFriends(friends);
}, []);
```

See [Exercise 11](../exercise-11/README.md) for a refresher on `useEffect`.

#### `legacy/Friends.entry.js`

Our legacy component defines a class method named `componentDidMount`. This is a standard React method, and it executes as soon as a component is mounted to the DOM. This effectively means "as soon as React realizes it needs to render this component for the first time."

```jsx
  async componentDidMount() {
    // ...
  }
```

The body of our `componentDidMount` method is pretty similar to the body of the modern component's `useEffect` function. It calls out to an API, and with the results calls a state modifier.

In a stateful class component, there is only one state modifier available to the entire component. It is named `this.setState`. The object passed to `this.setState` contains only the changes that need to be made to the state. In this case, that's the `friends` we got back from the API.

```jsx
  async componentDidMount() {
    const friends = await getFriendsFromApi();
    this.setState({
      friends,
    });
  }
```

Modern state management, in contrast, uses one state modifier for each piece of state that you want to manage.

### Legacy Lifecycle Events

There are several events that are available to a class-based React component.

#### `componentDidMount`

[The `componentDidMount` event](https://reactjs.org/docs/react-component.html#componentdidmount) fires when a component is mounted to the DOM - this is before the very first time it is rendered.

In a class component, this event was used when a component needed to load data from an API. It was also used to integrate with non-React APIs, like charting or websocket libraries.

The `useEffect` hook now accomplishes what `componentDidMount` did, the first time the hook executes.

#### `componentWillUnmount`

[The `componentWillUnmount` event](https://reactjs.org/docs/react-component.html#componentwillunmount) fires when a component is about to be unmounted from the DOM.

This event was used to clean up integrations with non-React APIs. In practice, when you had a `componentWillUnmount` handler, it was almost always cleaning up work that happened in a `componentDidMount` handler.

The `useEffect` hook now accomplishes what `componentWillUnmount` did. A `useEffect` hook is composed of two functions - one that executes when the effect needs to be run, and optionally one that is run when a previous effect needs to clean up. This second clean-up function effectively replaces `componentWillUnmount`.

#### `componentDidUpdate`

[The `componentDidUpdate` event](https://reactjs.org/docs/react-component.html#componentdidupdate) fires when a component is updated with new props or state.

This event was used when a component needed to react to changes that `render()` couldn't handle. In practice, this usually meant when a side-effect needed to be re-run.

The `useEffect` hook now accomplishes what `componentDidUpdate` did. A `useEffect` hook is composed of two functions - one that executes when the effect needs to be run, and optionally one that is run when a previous effect needs to clean up. The combination of these two functions has effectively replaced everything that `componentDidUpdate` was used for.

#### Others

[There are several other legacy lifecycle events, but they are infrequently used.](https://reactjs.org/docs/react-component.html#rarely-used-lifecycle-methods)

### Extra Credit

[Check out a diagram of the lifecycle methods available in a React class component.](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
