# Exercise 17

## Testing Component Render

In this exercise we'll look at testing our React components, and verifying that they are rendering properly.

### Setup

👉 Start your test suite. Open a new command window at the root of this project, and enter `npm run test-exercise-17`.

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

### Automated Tests

If you're unfamiliar with writing automated tests, or you're unfamiliar with Jest as a test framework, read [this short guide](../junk-drawer/TESTING.md).

We're going to write tests against our `friend-detail/FriendDetail.js` component. We've created a test file at `friend-detail/FriendDetail.spec.js` - our tests will go there.

👉 Open the `friend-detail/FriendDetail.spec.js` file.

### Importing Testing Dependencies

To facilitate writing tests against the `FriendDetail` component, we've imported several interesting dependencies into the spec file:

1. import { MemoryRouter } from 'react-router-dom';

In our running application, we use a `BrowserRouter` from React Router to handle routing. Any time we render a `<Link>` component in our app, it depends on being placed inside of a router.

When we're writing tests, we don't have a `BrowserRouter` wrapping our component tree. It depends on being run in actual browser, and we don't have that while running our tests. They run in Node, and get rendered to a fake DOM that simulates a browser.

Instead, we use a `MemoryRouter` to render our component tree. This serves the purpose of wrapping the tree in a router, so `<Link>` elements are happy, without requiring an actual browser.

2. import ThemeProvider from '../theme/Provider';

Similarly, when our application is running, the entire component tree is wrapped in a `<ThemeProvider>` element. We built this in a previous exercise.

When we render our component, we're going to need to wrap it in a `<ThemeProvider>` element, so that the ThemeContext consumers don't fail.

3. import { render } from 'react-testing-library';

We'll use `react-testing-library` to render our components into a fake DOM, and then make assertions against them. The main helper function is called [`render`](https://github.com/kentcdodds/react-testing-library#render).

4. import FriendDetail from './FriendDetail';

This is the component we're testing. Sometimes people refer to this as the "system under test". We need to import it, so that we can render it in our tests.

### Writing a test to verify the "Loading" state

We've stubbed out some placeholders for writing your tests.

The first test you'll write is named 'it renders loading if friend isn`t loaded yet'.

#### Arrange: Set up an empty friend

👉 In the first test, define a `friend` variable. Set it to `undefined`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#loading-arrange).

#### Act: Render the `<FriendDetail>` component.

The [`render()` function](https://github.com/kentcdodds/react-testing-library#render) from react-testing-library takes one argument - a JSX element for the component you wish to render.

The return value from `render()` is an object that contains methods which can be used to inspect the rendered output.

👉 In the first test, render a `<FriendDetail>` component.

- Use the `render()` function from react-testing-library.
- Store the result in a variable named `context`.
- Pass the `friend` variable as a prop named `friend`.
- Recall that we'll need to wrap the `<FriendDetail>` component in `<MemoryRouter>` and `<ThemeProvider>` elements, because components down the tree depend on them.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#loading-act).

#### Assert: Verify that the context contains the text `Loading...`.

##### `queryByText()`

One of the methods on the `context` object returned by a call to `render()` is named `queryByText()`. This method looks for an element in the rendered output that matches exactly the text passed in. If it finds one, that element is returned. If it doesn't, the value `null` is returned.

For example, if the following output was rendered by a component:

```jsx
<div>
  <h1>Hello!</h1>
</div>
```

Calling `queryByText()` against it would give the following results:

```jsx
context.queryByText('Hello!'); // returns the <h1> element
context.queryByText('Hello'); // returns null
context.queryByText('asdfadsfd'); // returns null
```

👉 In the first test, assert that the `Loading...` text is appearing in the rendered output.

- Use `context.queryByText()` to find the element.
- Use the `expect()` function to compare the result of `context.queryByText()`.
- The matcher for asserting that an item is not null is `.not.toBeNull()`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#loading-assert).

### Verify that your test is passing.

👉 Check your console. You should see output that indicates your test is passing:

```
 PASS  exercise-17/friend-detail/FriendDetail.spec.js
 PASS  exercise-17/complete/friend-detail/FriendDetail.spec.js

Test Suites: 2 passed, 2 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.783s, estimated 2s
Ran all test suites.

Watch Usage: Press w to show more.
```

[The complete test can be seen here.](./SOLUTIONS.md#loading-complete-test)

### Write a test verifying that the hydrated state gets rendered

The second test you'll write is a test that "it renders the friend details once it's loaded".

#### Arrange: Set up a hydrated friend

👉 In the second test, define a `friend` variable. Assign to it an object containing a `name`, an array of `colors`, and a `bio`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#hydrated-arrange).

#### Act: Render the `<FriendDetail>` component.

👉 In the second test, render a `<FriendDetail>` component.

- Use the `render()` function from react-testing-library.
- Store the result in a variable named `context`.
- Pass the `friend` variable as a prop named `friend`.
- Recall that we'll need to wrap the `<FriendDetail>` component in `<MemoryRouter>` and `<ThemeProvider>` elements, because components down the tree depend on them.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#hydrated-act).

#### Assert: Verify that the context contains text matching the rendered friend.

👉 In the second test, assert that text from the hydrated friend appears in the rendered output.

- Verify that the friend's name is present.
- Verify that the friend's bio is present.
- Use `context.queryByText()` to find the text elements.
- Use the `expect()` function to compare the results of `context.queryByText()`.
- The matcher for asserting that an item is not null is `.not.toBeNull()`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#hydrated-assert).

### Verify that your test is passing.

👉 Check your console. You should see output that indicates your test is passing:

```
 PASS  exercise-17/friend-detail/FriendDetail.spec.js
 PASS  exercise-17/complete/friend-detail/FriendDetail.spec.js

Test Suites: 2 passed, 2 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.76s, estimated 2s
Ran all test suites.

Watch Usage: Press w to show more.
```

[The complete test can be seen here.](./SOLUTIONS.md#hydrated-complete-test)
