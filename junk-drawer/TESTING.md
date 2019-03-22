# Jest

The test framework we're using in this workshop is Jest.

The key components of a Jest test are:

## describe()

The `describe` function allows you to namespace your tests.

The first argument to `describe` should be a name that accurately describes this set of tests.

The second argument to `describe` is a function, in which all of the tests for this set exist.

### Example

```js
describe('calculator/add', () => {
  // ...
});
```

In this example, we are writing a set of tests that all relate to the './calculator/add' component.

## it()

An individual test is declared with the `it()` function.

The first argument to `it` should be a name that accurately describes the test.

The second argument to `it` is a function, which contains the logic to execute the test.

### Example

```js
describe('calculator/add', () => {
  it('adds 1 and 2', () => {
    // ...
  });
});
```

In this example, we're writing a test for the add function to verify that it adds 1 and 2.

If the syntax of the second argument to `it` looks unfamiliar to you (`() => {...}`), [read about fat-arrow functions in modern JavaScript](./ANONYMOUS-FUNCTIONS.md)

# Components of an automated test

There are three basic steps associated with any automated test.

1. **Arrange**: Arrange the scenario you're testing.

2. **Act**: Perform the action you are testing.

3. **Assert**: Verify that the correct things happened when the action was performed.

## Example

```js
describe('calculator/add', () => {
  it('adds 1 and 2', () => {
    // arrange
    const first = 1;
    const second = 2;

    // act
    const result = add(first, second);

    // assert
    expect(result).toEqual(3);
  });
});
```

This test arranges two variables, acts by passing them to an `add` function, then asserts that the result is equal to 3.

If the result is not equal to 3, the test will fail. If the result is equal to 3, the test passes.

# Assertions/matchers

In the example above, there is a function named `expect()` in the assertion. This function comes from Jest, and it allows you to compare an actual value to an expected value.

When you pass a value to `expect()`, you are returned an object that has a bunch of assertion functions available. Jest calls these assertion functions 'matchers'.

In the example above, we used the `.toEqual()` matcher.

Some other matchers that are available:

```js
expect(result).toBeUndefined();
expect(result).toBeNull();
expect(result).toBeGreaterThan(1);
```

There are Jest matchers for just about any comparison you can think of. You can see the entire list [here](https://jestjs.io/docs/en/expect).

## not

To negate a matcher, you can call the `.not` property on the result of the `expect()` function. For example, to write an assertion that "the result does **not** equal 5", you would write this:

```js
expect(result).not.toEqual(5);
```

# Jest watch mode

Jest runs an interactive watch mode when it runs your tests. By default, this watch mode will run only the tests that are affected by local changes since your latest commit.

This is really helpful to keep you focused on the code you're actively writing, but sometimes you want to run different tests. Jest offers several other options for filtering tests in its watch mode.

To choose another filter, hit the `w` key in the interactive watch mode. You'll be presented with a list of available filters.
