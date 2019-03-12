# Exercise 9

## Managing Component State

In this exercise, we'll use component state to flip an information card back-and-forth on our FriendDetail page.

👉 Start the app for Exercise 9

In a console window, pointed at the root of this project, run `npm run start-exercise-9`.

This should open a browser window pointed at localhost:3000, showing a web app titled "Exercise 9: Managing Component State", and our three adorable kitten friends. If it doesn't, ask your neighbor for assistance or raise your hand.

### FriendFlipper: A New Component

We've redesigned our FriendDetail page a bit. It references a new child component - the `<FriendFlipper>`.

The `<FriendFlipper>` component will flip an information card for the user. The front is an image of our friend; on the back will be some details, like their ID & colors. The flipper isn't functional yet - but it has all the styles & content built out for it.

Your responsibility will be to utilize React component state to toggle the visible side of the flipper.

### Creating a state variable

The first thing we need to do with a stateful component is create a state variable.

We'll use the `useState()` function to do this. The `useState()` function takes a single argument: the default value for our state variable.

`useState()` returns an array of length 2. The first item is the value of the state variable, and the second item is a function we can call to update the value. We'll use [array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to assign these array items to variables with meaningful names.

The `useState()` function should be called at the top of a component function. An example looks like this:

```jsx
function Counter(props) {
  const [count, setCount] = useState(123);

  return (
    // ....what the component renders....
  )
}
```

In this example, the value of our state variable will be stored in `count`; we get a function named `setCount` to update the value; and we give the count an initial value of `123`.

👉 Add a state variable to the `FriendFlipper` component in `friend-detail/FriendFlipper.js`, which will keep track of whether the card is flipped.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#useState).

### Render the correct side based on state

Currently, the component is always rendering the `<Front>` of the card.

We'll want our component to render the `<Front>` component when the card is not flipped, and the `<Back>` component when it is flipped.

We can do this by checking the value of the state variable.

👉 Conditionally render the `<Front>` component or `<Back>` component, based on the value of the state variable you defined.

You can use a ternary statement to render the appropriate side, or call a function that uses an if/else to return the correct side.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#conditional-render).

### Pass the state modifier into the "side" components

To flip the card, we'll need to call our state modifier when the user clicks the button on either the `Front` or `Back` side.

The state modifier is currently available to us in the `FriendFlipper` component, but not in either the `Front` or `Back` component.

👉 Pass the state modifier function from the `FriendFlipper` component into the `Front` and `Back` components.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#pass-state-modifier).

### Toggle the state value when buttons are clicked

Now that our "sides" have the state modifier passed in, we can call the state modifier when we want to toggle the state value.

The state modifier will update the value of the state property to whatever value we pass. For example, if we have a state modifier named `setCount`, and we call `setCount(456)`, the state property will be updated to the value 456.

👉 Call the state modifier when the button is clicked on the `Front` side

The event name you'll want to handle is called `onClick`.

You will want to use a "fat arrow" function to handle the `onClick` event on the button. This function should execute a call to your state modifier, passing in the correct value to flip the card to the opposite side.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#toggle-front-to-back).

👉 Call the state modifier when the button is clicked on the `Back` side

Use the previous step as a guide to toggle the state property in the opposite direction, from the `Back` side.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#toggle-back-to-front).

### Test it out

At this stage, you've completed everything necessary to manage state in the `FriendFlipper` component.

When you browse the web app, you should not see any console errors. You should also be able to click on a specific friend to navigate to their detail page. From their detail page, you should be able to click the "Details" button, and see their information card flip over to show some details.

If you are unable to do this, see if you can figure out why. Investigate any console errors, look at the example solutions, ask your neighbor for help, or raise your hand for help.

### Extra Credit

- Read about [`useState`](https://reactjs.org/docs/hooks-state.html).
