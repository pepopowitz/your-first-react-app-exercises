# Exercise 3

## Modern JavaScript: Working With Variables

This exercise introduces you to many features utilized in modern JavaScript applications for working with variables.

We'll be working with unit tests again, to illustrate these features.

### Prerequisites

- If you're unfamiliar with the `let` and `const` keywords for declaring variables, [read about them](../junk-drawer/DECLARATION.md).

- If you're unfamiliar with "fat-arrow" syntax (`(args) => {}`) for defining anonymous functions, [read about them](../junk-drawer/ANONYMOUS-FUNCTIONS.md).

- If you're unfamiliar with writing unit tests in JavaScript, or the Jest test framework, [read about them](../junk-drawer/TESTING.md).

- If you're unfamiliar with importing and exporting modules in JavaScript, [revisit Exercise 1](../exercise-1/README.md).

### Get Started

👉 Start your test suite. Open a new command window at the root of this project, and enter `npm run test-exercise-3`.

You should see the following output:

```
No tests found related to files changed since last commit.
Press `a` to run all tests, or run Jest with `--watchAll`.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

If you don't see this output, try to investigate the message you see, ask your neighbor, or raise your hand for assistance.

If you do see this output, you're in good shape. The output will change as we modify our code.

We're going to be working with two files in the `exercise-3` folder: `greetings.spec.js` to write our tests, and `greetings.js` to make the tests pass.

👉 Open the `greetings.spec.js` and `greetings.js` files side-by-side.

The tests in `greetings.spec.js` offer you security as you refactor the functions in `greetings.js`. If any tests start failing during this exercise, you'll know that your changes didn't have the desired effect.

### Template Strings

Template strings are a way in modern JS to build up strings. Traditionally, we've concatenated strings with the `+` operator in JavaScript - as you can see in the current implementation of `buildGreeting()`.

Template strings offer a new syntax that makes concatenation easier to read. It looks like this:

```js
const result = `Static text ${dynamicValue} more static text ${anotherDynamicValue}`;
```

- A template string always begins and ends with the backtick (\`) character. This is the key in the top left of your keyboard, above the `Tab` key, shared with the `~` character.

- Any text that can be hardcoded is typed as-is inside the backticks.

- To inject values into the template string, add a `${}` sequence. The value you want to inject goes inside of the curly braces, and it can be any expression that evaluates or converts to a string.

👉 Rewrite the `buildGreeting` function to use string template literals instead of `+` concatenation.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#template-strings).

We'll use template strings in our React components, to inject dynamic values into messages on the screen.

### Ternary Expressions

Often in JavaScript we assign or return one of two values, based on some condition. You can see this happening in the current implementation of `choosePartingWord`.

Ternary expressions offer a more terse syntax for conditional assignment/return. A ternary expression looks like the right-hand side of this assignment:

```js
const actualValue = condition ? 'Value when true' : 'value when false';
```

- The first part of a ternary expression is a condition.

- Following the condition is a `?` character.

- After the `?` is the value that should be assigned if the condition evaluates to truthy. Think of this as the "positive" case.

- Next comes the `:` character.

- After the `:` is the value that should be assigned if the condition does not evaluate to truthy. Think of this as the "negative" case.

👉 Rewrite the `choosePartingWord` function to use a ternary expression instead of an `if`/`else` condition.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#ternary-expressions).

We'll use ternary expressions in our React components, to conditionally render different components or messages.

### Object Destructuring

We pass a lot of objects around in JavaScript, and often we want to pull specific properties off of them. The current implementation of `choosePartingWordFromObject` shows a classic way to do this - with the `.` operator on our object.

Object destructuring allows us to simplify this process, and save keystrokes. Destructuring means "pulling properties off an object". Object destructuring looks like this:

```js
const { propertyOne, propertyTwo } = objectOne;
```

- Curly braces wrap the properties we want to destructure off of the object, on the left-hand side of the assignment (`=`).

- The object from which we want to destructure the properties is on the right-hand side of the assignment.

- The variables declared in curly braces are assigned the value of properties with the **exact same names** on the right-hand object. If no property matches exactly, the variable on the left is assigned `undefined`.

👉 Rewrite the `choosePartingWordFromObject` function to declare the `name` and `language` variables using object destructuring.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#object-destructuring-1`).

#### Object destructuring from function arguments

If an object is passed into a function as an argument, we can even destructure our properties directly in the argument definition. This saves us from declaring new variables in the body of the function. Here's an example:

```js
function doSomething({ propertyOne, propertyTwo }) {
  // ...
}
```

This is like saying "there is an object passed in as the only argument to `doSomething`, and I don't care what's on that object except for the `propertyOne` and `propertyTwo` properties." Within your function body, you now have two variables declared for you - `propertyOne` and `propertyTwo`.

👉 Rewrite the `choosePartingWordFromObject` function to destructure the `name` and `language` variables in the function argument.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#object-destructuring-2`).

### Array Destructuring

Array destructuring is similar to object destructuring but, as you might have guessed, applied to arrays.

In the current implementation of `identifyLanguages`, you see a classic way of working with multiple items in an array. We're declaring variables based on the position of items in the array.

Array destructuring simplifies things, and looks like this:

```js
const [itemOne, itemTwo] = someArray;
```

- Square brackets wrap the items we want to destructure off of the array, on the left-hand side of the assignment (`=`).

- The array from which we want to destructure the items is on the right-hand side of the assignment.

- The variables declared in square brackets braces are assigned based on position. The first variable in square brackets is assigned the first item in the array, the second variable is assigned the second item, etc.

👉 Rewrite the `identifyLanguages` function to destructure the `primary` and `secondary` items from the array passed into the function.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#array-destructuring`).

We will use array destructuring in our app when we are managing component state.

### Array Mapping

There are several ways to iterate an array in JavaScript. The most basic method is to use a `for` loop, as demonstrated in the current implementation of `mapPartingWords`.

More recent versions of JavaScript include a method on an array called `.map()`. This method allows you to map an array of items in one shape to an array of another shape. A call to `array.map()` looks like this:

```js
const integers = [1, 2, 3, 4];

const doubledValues = integers.map(integer => {
  return integer * 2;
});

console.log(doubledValues); // [ 2, 4, 6, 8 ]
```

- The argument passed to `.map()` is a function.

- The function passed to `.map()` takes a value as an argument, and returns the mapped value.

- Behind the scenes, JavaScript will iterate the array, call the mapping function for each item, and return an array containing the mapped values.

👉 Rewrite the `mapPartingWords` function to use `.map()` instead of a `for` loop.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#array-mapping).

We'll use array mapping in our React components, to render arrays of components based on arrays of data.

#### Implicit Return

When mapping an array, often the mapping function does nothing more than `return` a value. When our mapping function is this simple, we can use a feature called implicit return to save a few keystrokes.

With our integer example from above, implicit return would look like this:

```js
const doubledValues = integers.map(integer => integer * 2);
```

- Implicit return eliminates the curly braces wrapping the function body, and the `return` statement.

- The right-hand side of the fat arrow function (`=>`) is assumed to be the result of the function call.

👉 Rewrite the `mapPartingWords` function to use implicit return instead of a function body.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#implicit-return).

Many of the mapping calls in our components will use implicit return.

### Extra Credit

[Read about all the other helpful methods available for working with arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2)
