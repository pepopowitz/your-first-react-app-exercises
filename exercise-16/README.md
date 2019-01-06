# Exercise 16

## React Hooks

This exercise will give you hands-on experience converting code to use the upcoming React hooks API. Hooks will simplify how we use several React features that we've already seen.

👉 Start the app for Exercise 16

In a console window, pointed at the root of this project, run `npm run start-exercise-16`.

This will open a browser window pointed at localhost:3000, showing a web app titled "Exercise 16: Hooks", our three adorable kitten friends, and a theme switcher that toggles between purple and green themes. If it doesn't, ask your neighbor for assistance or raise your hand.

### New Components: FriendFlipperBack and FriendFlipperFront

We've refactored the FriendFlipper component, extracting the `renderBack()` and `renderFront()` functions into `FriendFlipperBack` and `FriendFlipperFront` components. This will help us focus on the changes we're making.

---

### Rethinking State Management: `useState()`

The `useState` hook is a way to manage state in a functional React component without converting it to a class.

Here's an example of a stateful component written as a class (**not** using the `useState` hook):

```jsx
import React from 'react';

class MyCheckBox extends React.Component {
  state = {
    checked: false,
  };

  handleChanged = e => {
    this.setState({ checked: e.target.checked });
  };

  render() {
    return (
      <input
        type="checkbox"
        checked={this.state.checked}
        onChanged={this.handleChanged}
      />
    );
  }
}
```

And here is that same component written as a stateful function, with the `useState` hook:

```jsx
import React, { useState } from 'react';

function MyCheckBox() {
  const [checked, setChecked] = useState(false);

  return (
    <input
      type="checkbox"
      checked={checked}
      onChanged={() => setChecked(!checked)}
    />
  );
}
```

There are 4 steps to using the `useState` hook in a component:

1. If the component is a class, convert it to a function. We practiced this in [exercise 7](../exercise-7/README.md).

2. Import the `useState` function as a named import, from the 'react' dependency. (`import React, { useState } from 'react';`)

3. Call `useState` at the beginning of the function.

   a. Pass the default value as the lone argument to `useState`. In the example above, the default value is `false`.

   b. An array is returned by `useState`. The first item in the array represents the current value of the state item; the second item is a function we can call to change the value of the state item. In the example above, we are destructuring the returned array into `checked` and `setChecked` variables.

4. Use the state variables from 3b (`checked` and `setChecked`) in the rendered component.

👉 Convert `friend-detail/FriendFlipper.js` from a stateful class component to a stateful function component, using the `useState` hook.

Use the example & steps above as a guide.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friendflipper-usestate).

---

### Rethinking Lifecycle Events: `useEffect()`

The `useEffect` hook allows you to tap into React lifecycle events in a functional React component, without converting it to a class.

Here's an example of a class component that utilizes lifecycle events (**not** using the `useEffect` hook):

```jsx
import React from 'react';

class Chat extends React.Component {
  componentDidMount () {
    socket.emit('join', { id: this.props.friendId });
  }

  componentDidUpdate(nextProps) {
    if (nextProps.friendId !== this.props.friendId) {
      socket.emit('leave', { id: this.props.friendId });
      socket.emit('join', { id: nextProps.friendId });
    }
  }

  componentWillUnmount () {
    socket.emit('leave', { id: this.props.friendId });
  }

  render() { ... }
}
```

This component joins a socket when the component mounts, leaves the original socket and joins a new one when the `friendId` prop changes, and leaves the socket when the component unmounts.

Here is the same component written as a functional component that uses the `useEffect` hook:

```jsx
import React, { useEffect } from 'react';

function Chat(props) {

  useEffect(() => {
    socket.emit('join', { id: props.friendId });

    return () => {
      socket.emit('leave', { id: props.friendId });
    }

  }, [ props.friendId ])

  return ( ... )
}
```

There are 3 steps to using the `useEffect` hook in a component:

1. If the component is a class, convert it to a function. We practiced this in [exercise 7](../exercise-7/README.md).

2. Import the `useEffect` function as a named import, from the 'react' dependency. (`import React, { useEffect } from 'react';`)

3. Call `useEffect` at the beginning of the function.

   a. The first argument to `useEffect` is a function that should execute when the component mounts, or when props change that require the effect to re-run. In the example above, this function joins a socket based on `props.friendId`.

   b. Not all effects require "cleanup" code - but if they do, this is accomplished by the function in 3a returning another anonymous function. This returned function will execute when the component unmounts, or when props change that require the effect to re-run. In our example above, this "cleanup" function will leave a socket based on the friendId.

   c. The second argument to `useEffect` is an array. This array will contain all props which, when their value changes, would require the effect to re-run. In the example above, we pass `[ props.friendId ]` - this means that the effect will re-run whenever the value of the `friendId` prop changes.

👉 Convert `friends/Friends.entry.js` from a class component to a function component, using the `useEffect` hook.

Use the example & steps above as a guide.

Notice that this component manages state, in addition to using the `componentDidMount` lifecycle method. You'll want to convert the stateful portions to use `useState`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friends.entry-useeffect).

---

### Rethinking Context: `useContext()`

The `useContext` hook eliminates the need for the "function as a child" pattern when consuming a context in a component. "Function as a child", similar to the "render props" pattern, is a useful pattern in React apps, but it can also be confusing. You can read more about these patterns [here](https://reactjs.org/docs/render-props.html).

Here's an example of a component that consumes a context without the `useContext` hook. Notice how the child of `<CurrentUserContext.Consumer>` is a function:

```jsx
import React from 'react';
import CurrentUserContext from './context';

export default function CurrentUser() {
  return (
    <CurrentUserContext.Consumer>
      {({ currentUser, handleUserLogout }) => (
        <div>
          {currentUser.name}
          <button onClick={handleUserLogout}>Log Out</button>
        </div>
      )}
    </CurrentUserContext.Consumer>
  );
}
```

And here is the same component, using the `useContext` hook:

```jsx
import React, { useContext } from 'react';

import CurrentUserContext from './context';

export default function CurrentUser() {
  const { currentUser, handleUserLogout } = useContext(CurrentUserContext);

  return (
    <div>
      {currentUser.name}
      <button onClick={handleUserLogout}>Log Out</button>
    </div>
  );
}
```

There are 3 steps to using the `useContext` hook in a component:

1. Import the `useContext` function as a named import, from the 'react' dependency. (`import React, { useContext } from 'react';`)

2. Call `useContext` at the beginning of the function.

   a. Pass the associated context as the lone argument to `useContext`. In the example above, that's the `CurrentUserContext` context.

   b. The "value" of the context is returned by `useContext`. This will have been defined by you when you create the context. In our example, it is an object containing `currentUser` and `handleUserLogout` properties.

3. Use the context value from 2b (an object with `currentUser` and `handleUserLogout`) in the rendered component.

👉 Convert `theme/Switcher.js` to use the `useContext` hook.

Use the example & steps above as a guide.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#switcher-usecontext).

### Extra Credit

The following components could also be converted to use hooks:

- friend-detail/FriendDetail.entry.js (`useState`, `useEffect`)
- friend-detail/FriendFlipperBack.js (`useContext`)
- friend-detail/FriendFlipperFront.js (`useContext`)
- theme/Provider.js (`useState`)
