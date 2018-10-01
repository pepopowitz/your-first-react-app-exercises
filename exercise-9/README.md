# Exercise 9
## Defining PropTypes

PropTypes are a way to validate props passed into a component. If a propType is not met, you'll get a warning in your browser console. This is a nice way to make sure you're passing around the data your components need.

This exercise will introduce you to working with PropTypes. 

&#128073; Start the app for Exercise 9

In a console window, pointed at the root of this project, run `npm run start-exercise-9`.

This should open a browser window pointed at localhost:3000, showing a web app titled "Exercise 9: Defining PropTypes", and our three adorable kitten friends. If it doesn't, ask your neighbor for assistance or raise your hand.

&#128073; Open Exercise.js

All of your work for this exercise will take place in Exercise.js.

### Defining PropTypes

In this exercise, all of our components are stateless functional components. This means that we need to attach `propTypes` after the function is declared, like below:

```jsx
function MyComponent() {
  return <div>...</div>;
}

MyComponent.propTypes = {
  fieldOne: PropTypes.string.isRequired,
  fieldTwo: PropTypes.number.isRequired,
};
```

Any defined propType field can be marked as required by attaching `.isRequired` to the end of it, like the example above.

The `PropTypes` object (imported from the `prop-types` dependency) includes a handful of types. Following are a few.

* `array`
* `bool`
* `number`
* `string`
* `object`: Validates that the prop is any object
* `shape`: Validates that the prop is an object of a specified shape

&#128073; Define `propTypes` for the `FriendProfile` component.

The props passed into the `FriendProfile` component are:

* `name`: this is a string, and it is required.
* `image`: this is a string, and it is required.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friendprofile-proptypes).

&#128073; Define `propTypes` for the `Friends` component.

The props passed into the `Friends` component are:

* `friends`: this is an array, and it is required.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friends-array).

### Specifying the shape of an array

When we define a propType of type array, we can also specify the shape of items in the array. Following is an example of a component that requires an array named `people`. Each element of the `people` array must contain two properties: `firstName` and `lastName`.

```jsx
MyComponent.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    })
  )
}
```
&#128073; Specify the shape of elements required in the `friends` array passed into the `Friends` component, using `PropTypes.arrayOf` and `PropTypes.shape`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friends-arrayof-shape).

&#128073; Remove a required property from the `myFriends` array.

You choose which one. After removing the property, check your browser console to see what happens when a required prop isn't passed into a component.

You should see an error like this: 

```
index.js:2178 Warning: Failed prop type: The prop `image` is marked as required in `FriendProfile`, but its value is `undefined`.
```

If you get stuck, [see a possible solution here](./SOLUTIONS.md#removed-property).
