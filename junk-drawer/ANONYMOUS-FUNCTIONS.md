# Anonymous functions

Modern JavaScript includes a syntax to write "anonymous" functions, using a "fat arrow" (`=>`).

## Callback functions

Often in JavaScript we pass functions to other functions - we usually call these "callback" arguments. Typically when we define a callback, we don't give it a name, to imply transience.

A classically defined callback function in JavaScript looks like the argument passed to `doSomething` in this example:

```jsx
const result = doSomething(function(argument1) {
  console.log('this is inside a callback function');
});
```

This is similar to a named function declaration, except there is no name specified for the callback.

## Fat-arrow functions

Modern JavaScript supports a new syntax for writing unnamed functions: the "fat arrow" syntax.

The same example, written as a fat-arrow function, looks like this:

```jsx
const result = doSomething((argument1) => {
  console.log('this is inside a callback function');
});
```

Note the lack of a `function` keyword, and a fat arrow (`=>`) between the argument list and function body. We save a few keystrokes with fat arrow functions, and some including myself would argue that there is more meaning in defining a fat arrow instead of a classically defined unnamed function.

In this course, you'll see fat arrow functions used in tests and in React components that render lists of things.

There are other subtle differences between a classically defined unnamed function and a fat-arrow function, but they are unimportant for this course.
