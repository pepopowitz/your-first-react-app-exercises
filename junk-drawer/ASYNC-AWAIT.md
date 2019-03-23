# `async` And `await` Keywords

## Asynchronous JavaScript

Much of the JavaScript code we write is asynchronous. Our code is interacting with external resources like APIs and users are interacting with our code. JavaScript apps spend a lot of time waiting for other things or people to complete their actions. As a result, we need to be able to write code that will complete "later", after the action is initiated or completed.

Several strategies have been used over the years to support asynchronous code in JavaScript: callbacks, Promises, and most recently the `async` and `await` keywords.

## Problem Description

We'll demonstrate all these strategies with the same example.

Suppose we have three functions that need to execute in sequence. We'll call them `callKitten`, `feedKitten`, and `petKitten`. None of them can start until the previous has completed, and each of these steps takes time to complete.

## Callbacks

A callback function is a function that is passed as an argument, and called when asynchronous work is completed. This is the oldest way in JavaScript to write asynchronous code.

We can implement our kitten example with callbacks with functions that look like this:

```js
function takeCareOfKitten(kitten, done) {
  callKitten(kitten, () => {
    feedKitten(kitten, () => {
      petKitten(kitten, () => {
        done();
      });
    });
  });
}

function callKitten(kitten, done) {
  doSomeSlowAction(kitten, done);
}

function feedKitten(kitten, done) {
  doSomeOtherSlowAction(kitten, done);
}

function petKitten(kitten, done) {
  doAThirdSlowAction(kitten, done);
}
```

In `takeCareOfKitten`, we are passing each step a function that performs the next step. `callKitten`, for example, gets a function that calls `feedKitten`; `feedKitten` gets a function that calls `petKitten`; and `petKitten` gets a function that calls `done`.

Each of these functions being passed through the chain is a callback function. These callback functions are intended to execute when the slow actions inside `callKitten`, `feedKitten`, and `petKitten` have completed.

Callback functions are not the easiest thing to work with. We end up passing around a lot of functions, and it can be difficult to track down when they are being called, and why. Also, notice the arrow shape of the function `takeCareOfKitten`. This is a tell-tale sign of using callbacks. This shape of code often leads to confusion, as each level of indentation is a new scope in the code and a new set of code for the reader to have to understand.

Callback functions are the least preferable strategy for asynchronous JavaScript.

## Promises

Promises are the second oldest strategy for asynchronous JavaScript. A Promise is, as it sounds, a promise. It is a promise that a block of code will return a value _after_ the slow work completes.

A Promise is an immediately returned object. The returned Promise includes a `.then` method, which you can use to execute more code after the promise "resolves", or completes.

Promises can be chained in a row. When one function returns a promise, that promise can return another promise, and so on down the line. This allows us to chain a series of `.then` calls, which can be much more readable than the same code using callbacks.

Our kitten example would look like this when written with promises:

```js
export function takeCareOfKitten(kitten) {
  return callKitten(kitten)
    .then(() => feedKitten(kitten))
    .then(() => petKitten(kitten));
}

function callKitten(kitten) {
  return new Promise(resolve => {
    doSomeSlowAction(kitten, () => resolve());
  });
}

function feedKitten(kitten) {
  return new Promise(resolve => {
    doSomeOtherSlowAction(kitten, () => resolve());
  });
}

function petKitten(kitten) {
  return new Promise(resolve => {
    doAThirdSlowAction(kitten, () => resolve());
  });
}
```

- Notice that our arrow shape is gone from `takeCareOfKitten`! This is because we've chained our promises - each one returns another promise, and we call `.then` on each one. Each consecutive `.then` function is only called when the previous work completes.

- We're no longer passing callback functions around. This is great!

- Each `new Promise` is given a function whose first argument is `resolve`. `resolve` is a function - we call it when our slow work has completed, and this fulfills the promise, and allows our code to flow to the next step.

Promises are preferable to callbacks. There is still a better option for asynchronous JavaScript, though: `async` and `await` keywords.

## `async` And `await` Keywords

The `async` and `await` keywords are a newer syntax that can make it easier to work with Promises. Under the covers, they translate to Promises, but that isn't obvious from the syntax.

The `async` keyword is a way to mark a function as "something that will take time to execute". We mark a function as async by simply prefixing the function keyword, like this:

```js
async function feedKitten(kitten) {
  // ...
}
```

When we call an `async` function, we need to `await` its completion. This keyword tells JavaScript to pause execution until the `async` work completes. Our kitten example, written with `async`/`await`, looks like this:

```js
export async function takeCareOfKitten(kitten) {
  await callKitten(kitten);
  await feedKitten(kitten);
  await petKitten(kitten);
}

async function callKitten(kitten) {
  await doSomeSlowAction(kitten);
}

async function feedKitten(kitten) {
  await doSomeOtherSlowAction(kitten);
}

async function petKitten(kitten) {
  await doAThirdSlowAction(kitten);
}
```

In this example, when `takeCareOfKitten` gets to callKitten, it calls the function but pauses execution in `takeCareOfKitten` until `callKitten` resolves. Once `callKitten` completes, it moves to the next line, and calls `feedKitten` - but again, it pauses execution of `takeCareOfKitten` until `feedKitten` completes.

The special secret of `async` and `await` is that it is really just syntactical sugar for Promises. Under the covers, all of this is functioning asynchronously because of Promises. The `async`/`await` syntax makes it easier to understand what is happening, though.

Also note that once we start converting one function to `async`, it is easier for us to read the code if we convert all called & calling functions to `async`.

## This Course

In this course, we're going to use the `async`/`await` strategy for asynchronous event handlers.

## Further Reading

If you'd like to read more about asynchronous JavaScript, [here are some great docs!](https://javascript.info/async).
