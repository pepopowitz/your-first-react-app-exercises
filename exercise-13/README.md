# Exercise 13
## Managing Component State

In this exercise, we'll use component state to flip an information card back-and-forth on our FriendDetail page.

&#128073; Start the app for Exercise 13

In a console window, pointed at the root of this project, run `npm run start-exercise-13`.

This should open a browser window pointed at localhost:3000, showing a web app titled "Exercise 13: Managing Component State", and our three adorable kitten friends. If it doesn't, ask your neighbor for assistance or raise your hand.

### FriendFlipper: A New Component

We've redesigned our FriendDetail page a bit. It references a new child component - the `<FriendFlipper>`. 

The `<FriendFlipper>` component will flip an information card for the user. The front is an image of our friend; on the back will be some details, like their ID & colors. The flipper isn't functional yet - but it has all the styles & content built out for it.

Your responsibility will be to utilize React component state to toggle the visible side of the flipper.

### Initializing State

The first thing we need to do with a stateful component is initialize the state.

In this case, we'll want our initial state to be such that the card is not flipped yet. We will use a boolean state property named `flipped` to manage this.

Remember that when initializing state, we can do it a couple ways:

1. Constructor initialization

This method utilizes the class constructor, and looks something like this:

```jsx
export default class Component extends React.Component {
  constructor(props) {
    super(props); // This calls the base constructor, with the passed-in props. 

    this.state = {
      // set initial state properties here
    }
  }
  // ...
}
```

2. Class property initialization

This method utilizes a newer feature of JavaScript - class properties - and looks something like this:

```jsx
export default class Component extends React.Component {
  state = {
    myValue: 0 // or whatever default you want to set it to
  }

  // ...
}
```

&#128073; Initialize the state in `friend-detail/FriendFlipper.js` so that the `flipped` property is defaulted to `false`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#initialization).

### Adding An Event Handler

We need to handle the event that a user "flips" the information card.

Recall that we handle an event in a stateful component with a class property assigned to a fat-arrow method that calls `setState`. This looks something like this: 

```jsx
export default class Component extends React.Component {
  myEventHandler = () => {
    this.setState({
      myValue: 1 // or whatever value you want to set it to
    })
  }
  // ...
}
```

If we want to update the state based on the current state of the component, we can use the alternate override for `setState`, like this: 

```jsx
export default class Component extends React.Component {
  myEventHandler = () => {
    this.setState((prevProps) => {
      return {
        myValue: prevProps.myValue + 1 // or whatever value you want to set it to
      }
    })
  }
  // ...
}
```

&#128073; Add an event handler to `friend-detail/FriendFlipper.js` that updates the `flipped` state property to the opposite of the current value of `flipped`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#event-handler).

### Conditionally flipping the card based on state

Once our event handler changes the state, we'll need our `render` function to flip the card based on the `flipped` state property.

We can do this by conditionally adding the `styles.flipped` style to the `styles.flipWrapper` element in our `render` function.

If you want, you can manually concatenate the styles - `styles.flipWrapper` and `styles.flipped`, based on the condition that `this.state.flipped` is true.

If you prefer, you can use the `classnames` module that was previously mentioned to conditionally build the styles.

Imagine you had a property named `myProperty`, a style imported from `styles.css` named `styles.myPropertyClass`, and another style named `styles.constantClass` which is always applied. Using `classnames` to build conditional styles would look something like this:

```jsx
import classNames from 'classnames';

class MyComponent extends React.Component {
  render() {
    const appliedStyles = classNames(
      styles.constantStyle, // this class will always be applied.
      {
        [styles.myPropertyClass]: myProperty
        // this class will only be applied if myProperty is true.
      }
    );
  }
}
```

The second argument to `classNames()` is an object that contains keys that refer to the conditionally applied style names, and values that return booleans indicating if the styles should be applied.

&#128073; Conditionally append the `styles.flipped` class to the `styles.flipWrapper` element in `friend-detail/FriendFlipper.js`, based on the value of `this.state.flipped`. 

If `this.state.flipped` is true, the `styles.flipped` class should be applied. If it is false, the `styles.flipped` class should not be applied.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#toggle-class-name).

### Tying it all together - connecting the buttons to the event handler

We have one last step to hook up our state management. When the buttons on the information card are clicked, they need to call our event handler.

Calling event handlers from a button click looks like this:

```jsx
class MyComponent extends React.Component {
  myEventHandler = () => {
    // ...
  }

  render() {
    // ...
      <button type="button"
        onClick={this.myEventHandler} />
    // ...
  }
}
```

&#128073; Call the event handler you added above from the `onClick` event of both `<button>` elements in `friend-detail/FriendFlipper.js`. 

If you get stuck, [see a possible solution here](./SOLUTIONS.md#connect-buttons-to-handler).

### Test it out

At this stage, you've completed everything necessary to manage state in the `FriendFlipper` component.

When you browse the web app, you should not see any console errors. You should also be able to click on a specific friend to navigate to their detail page. From their detail page, you should be able to click the "Details" button, and see their information card flip over to show some details.

If you are unable to do this, see if you can figure out why. Investigate any console errors, look at the example solutions, ask your neighbor for help, or raise your hand for help.
