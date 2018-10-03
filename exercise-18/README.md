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

We built the `FriendFlipper` a few exercises ago. Recall that it has a front and a back. When the button is clicked on either side, the opposite side renders. 

We want to write tests that verify that (1) the front side is present when the component initially renders, and (2) the back side is present when the button on the front is clicked.

### Adding Test IDs to the FriendFlipper

When we render our FriendFlipper, we'll want to identify the front and back sides. 

Currently, we could identify them by CSS classes, but that isn't a great practice. Identifying elements by CSS classes is brittle, leading to easily-broken tests. Developers might rename the CSS classes, and not realize they're going to break our tests. 

It'd be better to specify an identifier explicitly on the element - so that when a developer saw it, they would know not to remove it, because a test was depending on it.

We'll do this with the attribute `data-testid`.

&#128073; Add a `data-testid="front"` prop to the front side of the `FriendFlipper` component. 

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friendflipper-front).

&#128073; Add a `data-testid="back"` prop to the back side of the `FriendFlipper` component. 

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friendflipper-back).

### FriendFlipper tests

We've created a test file at `friend-detail/FriendFlipper.spec.js` - our tests will go there.

&#128073; Open the `friend-detail/FriendFlipper.spec.js` file.

### Imported Testing Dependencies

To facilitate writing tests against the `FriendDetail` component, we've imported several interesting dependencies into the spec file:

1. `MemoryRouter`: we will wrap our component in this when rendering. It is required to render `<Link>` elements that are present in the tree.
2. `ThemeProvider`: we will wrap our component in this when rendering. It is required to render the `ThemeContext.Consumer`s that are present in the tree.
3. `render`: this is the rendering function from `react-testing-library`. We'll use it in the "act" steps of our tests.
4. `fireEvent`: this is an object from `react-testing-library` that allows us to fire DOM events. We'll use it to simulate the clicking of a button in our tests.
5. `FriendFlipper`: this is the component under test.


### Write a test verifying that the front is present by default, but not the back

We've stubbed out some placeholders for your tests, again.

The first test you'll write is named 'it defaults to the front side'.

#### Arrange: Set up a fully-hydrated friend.

&#128073; In the 'front side' test, define a `friend` variable. Assign to it an object containing a `name`, an array of `colors`, and a `bio`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#front-arrange).

#### Act: Render the `<FriendFlipper>` component.

&#128073; In the 'front side' test, render a `<FriendFlipper>` component.

* Use the `render()` function from react-testing-library.
* Store the result in a variable named `context`.
* Pass the `friend` variable as a prop named `friend`.
* Recall that we'll need to wrap the `<FriendFlipper>` component in `<MemoryRouter>` and `<ThemeProvider>` elements, because components down the tree depend on them.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#front-act).

#### Assert: Verify that the rendered context contains the `front` testID, but not the `back` testID.

##### `queryByTestId()`

We'll use a different method from the rendered context this time, named `queryByTestId()`. This method will search for an element that has a `data-testid` equal to the argument passed in.

If an element is found with that test ID, it is returned. If no matching element is found, `null` is returned.

&#128073; In the 'front side' test, assert that the proper side is showing in the rendered output.

* Verify that the `front` testId is present.
* Verify that the `back` testId is **not** present.
* Use `context.queryByTestId()` to find the elements.
* Use the `.toBeNull()` and `.not.toBeNull()` matchers to assert the presence/non-presence of the test IDs.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#front-assert).

### Verify that your test is passing.

&#128073; Check your console. You should see output that indicates your test is passing.

[The complete test can be seen here.](./SOLUTIONS.md#front-complete-test)

### Writing a test to verify that the `Details` button shows the back side of the flipper.

The second test you'll write is a test that "it flips to the back side after a button click".

#### Arrange: Set up a fully-hydrated friend.

&#128073; In the second test, define a `friend` variable. Assign to it an object containing a `name`, an array of `colors`, and a `bio`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#back-arrange).

#### Act: Render the `<FriendFlipper>` component. Find the `Details` button, and click it.

##### Render the `<FriendFlipper>` component.

&#128073; In the second test, render a `<FriendFlipper>` component.

* Use the `render()` function from react-testing-library.
* Store the result in a variable named `context`.
* Pass the `friend` variable as a prop named `friend`.
* Recall that we'll need to wrap the `<FriendFlipper>` component in `<MemoryRouter>` and `<ThemeProvider>` elements, because components down the tree depend on them.

##### Find the `Details >` button.

Once we've rendered the component, we need to grab the rendered `Details >` button. We can use the `getByText()` method of the rendered context. This method will find an element with the exact matching text, and return it.

&#128073; In the second test, get the rendered `Details >` button, by text, from the context.

* Use the `context.getByText()` method to find the element.

##### Fire a click event.

With a reference to the button, we can use `fireEvent` to simulate a click event of our button. 

To simulate a click with `fireEvent` on a button with text `button text`, we would do this:

```jsx
const renderedButton = context.getByText('button text');

fireEvent.click(renderedButton);
```

&#128073; In the second test, fire a `click` event against the button captured by `context.getByText()`.

If you get stuck, [see a possible solution for the `arrange` portion of this test here](./SOLUTIONS.md#back-act).

#### Assert: Verify that the rendered context contains the `back` testID, but not the `front` testID.

At this stage, if the component were rendered to the browser, we should see the "back" side showing up.

&#128073; In the second test, assert that the proper side is showing in the rendered output.

* Verify that the `back` testId is present.
* Verify that the `front` testId is **not** present.
* Use `context.queryByTestId()` to find the elements.
* Use the `.toBeNull()` and `.not.toBeNull()` matchers to assert the presence/non-presence of the test IDs.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#back-assert).

### Verify that your test is passing.

&#128073; Check your console. You should see output that indicates your tests are passing.

[The complete test can be seen here.](./SOLUTIONS.md#back-complete-test)
