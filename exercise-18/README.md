# Exercise 18
## Testing Component Interactions

In this exercise, we're going to write tests to verify that the `FriendFlipper` component is functioning properly with user interaction.

### Setup

&#128073; Start your test suite. Open a new command window at the root of this project, and enter `npm run test-exercise-17`.

You should see the following output:

```
No tests found related to files changed since last commit.
Press `a` to run all tests, or run Jest with `--watchAll`.

Watch Usage
 › Press a to run all tests.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

If you don't see this output, try to investigate the message you see, ask your neighbor, or raise your hand for assistance.

If you do see this output, you're in good shape. The output will change as we modify our code.

### `FriendFlipper` Functionality

We built the `FriendFlipper` a few exercises ago. Recall that it has a front and a back. When the buttons are clicked on either side, the opposite side renders. 

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
