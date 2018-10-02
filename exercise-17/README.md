# Exercise 17
## Testing Component Render

&#128073;

### ThemeProvider

### Faking a Router

MemoryRouter

### render (from react-testing-library)

### getByText

### Write a test verifying that the loading state gets rendered

Arrange: declare a `friend`, but leave it set to `undefined`

Act: `render()` the `<FriendDetail>` component (and the necessary context wrappers - `MemoryRouter` and `ThemeProvider`). Receive a `context` variable in return.

Assert: Verify that the context contains the text `Loading...`.

Solution: Loading State

### Write a test verifying that the hydrated state gets rendered

Arrange: declare a `friend`. Assign to it an object containing a `name`, an array of `colors`, and a `bio`.

Act: `render()` the `<FriendDetail>` component (and the necessary context wrappers - `MemoryRouter` and `ThemeProvider`). Receive a `context` variable in return.

Assert: 

1. Verify that the context contains text matching the name you provided.
2. Verify that the context contains text matching the bio you provided.

Solution: Hydrated State

### Make sure the tests are passing

If they aren't, investigate the error in the console, and see if you can figure out why. If you get stuck, raise your hand, or ask your neighbor.
