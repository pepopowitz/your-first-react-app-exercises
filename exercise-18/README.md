# Exercise 18
## Testing Component Interactions

In this exercise, we're going to write tests to verify that the `FriendFlipper` component is functioning properly with user interaction.

### `FriendFlipper` Functionality

We built the `FriendFlipper` a few exercises ago. Recall that it has a front and a back, and when the buttons are clicked on either side, the opposite side renders. 

We want to write tests that verify that (1) the front side is present when the component initially renders, and (2) the back side is present when the button on the front is clicked.

### Test IDs

added to FriendFlipper so we can identify if front or back is present

### fireEvent

### More context methods

#### getByTestId(testId)
#### getByText(text)
#### queryByTestId(testId)
#### queryByText(text)

### Write a test verifying that the front is present by default, but not the back

Arrange: declare a `friend`. Assign to it an object containing a `name`, an array of `colors`, and a `bio`.

Act: `render()` the `<FriendFlipper>` component (and the necessary context wrappers - `MemoryRouter` and `ThemeProvider`). Receive a `context` variable in return.

Assert: 

Verify that...
1. the context contains a test ID matching `front`.
2. the context contains text matching the details button (`Details >`).
3. the context DOES NOT contain a test ID matching `back`.
4. the context DOES NOT contain text matching `Colors:`.

Solution: Default State


### Write a test verifying that after the `Details >` button is clicked, the back is present, but not the front.

Arrange: declare a `friend`. Assign to it an object containing a `name`, an array of `colors`, and a `bio`.

Act: `render()` the `<FriendFlipper>` component (and the necessary context wrappers - `MemoryRouter` and `ThemeProvider`). Receive a `context` variable in return.

Grab a reference to the `Details >` button with `context.getByText`.

Call `fireEvent.click(element)` against the `Details >` button. At this point, if you could see your `FriendFlipper`, the back would be showing instead of the front.

Assert: 

Verify that...
1. the context DOES NOT contain a test ID matching `front`.
2. the context DOES NOT contain text matching the details button (`Details >`).
3. the context contains a test ID matching `back`.
4. the context contains text matching `Colors:`.

Solution: Hydrated State
