# Exercise 1

## Modern JavaScript: Modules

This exercise introduces you to the module import & export features utilized in modern JavaScript applications.

The instructor will lead you through some code examples. Follow along!

### Setup

This exercise utilizes unit tests for demonstration purposes. You don't need to know much about unit tests coming in.

👉 Start your test suite. Open a new command window at the root of this project, and enter `npm run test-exercise-1`.

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

### Prerequisites

- If you're unfamiliar with the `let` and `const` keywords for declaring variables, [read about them](../junk-drawer/DECLARATION.md).

- If you're unfamiliar with "fat-arrow" syntax for defining anonymous functions, [read about them](../junk-drawer/ANONYMOUS-FUNCTIONS.md).

- If you're unfamiliar with writing unit tests in JavaScript, or the Jest test framework, [read about them](../junk-drawer/TESTING.md).

### Modules

Modules are a way to share reusable code in a JavaScript app. Many other languages support features similar to modules - they might also call them packages.

If you've used the `require()` keyword in a JavaScript app, you've used modules.

Modern JavaScript allows modules to be exported from a file in one of two ways: as a named dependency, or as a default dependency.

### Named Dependencies

A named dependency in JavaScript is an object (usually a function) that is exported with a specific name attached to it. When it is imported into another file, it must be referenced by that specific name.

Let's write and test a named dependency. In the `exercise-2` folder, we have a commented-out test named `it('adds two numbers')` in `add.spec.js`. We'll use it to test a function named `add` in `add.js`.

👉 Open the `add.spec.js` and `add.js` files side-by-side.

Our first step for writing this test is to uncomment it.

👉 Uncomment the first test in `add.spec.js`, named `it('adds two numbers')`

Save the file, and you should see an error in your console:

```
ReferenceError: add is not defined
```

As the error indicates, we haven't defined `add` in this test file. We don't _want_ to define it in `add.spec.js`, though - we want to to import it from `add.js`.

#### Import the `add` function

We import a dependency in JavaScript with the `import` keyword. To import named dependencies, we put this at the top of our file:

```js
import { theFunctionName, andAnotherFunctionName } from './theFilePath.js';
```

The `import` keyword indicates that we are going to import a dependency from somewhere.

The curly braces (`{ ... }`) indicate that the dependency has a name. If there are multiple dependencies to import, we comma-separate them.

The `from` keyword & file-path indicate where we are importing the dependency from.

It's important when importing from a file in the same directory to specify `./` at the beginning of the path.

You can define more than one "import" statement, if your file needs to work with many dependencies.

👉 Add an `import` statement to import the named function `add` from the `add.js` file.

Remember that it's important to specify `./` at the beginning of a path in the same folder!

If you get stuck, [see a possible solution here](./SOLUTIONS.md#import-named).

You should see a different error in your console, now:

```js
TypeError: (0 , _add.add) is not a function
```

We're importing the add function from `add.js`...but `add.js` isn't exporting that dependency yet!

#### Export the `add` function

To export a function (or variable, or constant, or...) from a file, simply put the keyword `export` before it's definition.

For example, this will export a function named `doStuff` from a file:

```js
export function doStuff() { ... }
```

👉 Export the `add` function from `add.js`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#export-named).

Your test should now be passing! You've exported a named function from `add.js`, imported it into `add.spec.js` with that name, and verified that it works correctly! #highFive

### Default Dependencies

Every module in JavaScript (for now, a module is basically a file) has the ability to specify one special dependency: a `default` dependency.

Only one `default` dependency may be specified in a module. If you attempt to define more than one, you'll get an error.

Let's write and test a default dependency! In the `exercise-2` folder, we have a commented-out test named `it('adds 3 to something')` in `add.spec.js`. We'll use it to test a function named `addThree` in `add.js`.

👉 Uncomment the second test in `add.spec.js`, named `it('adds 3 to something')`

Save the file, and you should see an error in your console:

```
ReferenceError: addThree is not defined
```

As the error indicates, we haven't defined `addThree` in this test file, or imported it.

#### Import the `addThree` function

Importing a default dependency is slightly different than importing a named dependency. You specify the dependency name _without_ curly braces, like this:

```js
import someFunction from './aFilePath.js';
```

Because this is a default dependency, and there can only be one per module, we can name this dependency whatever we want when we import it.

👉 `import` the default dependency from the `add.js` file. Name it `addThree`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#import-default).

You should see a different error in your console, now:

```js
TypeError: (0 , _add.default) is not a function
```

(See how it refers to this function as `default`, instead of the name we gave it?)

We need to export `addThree` from `add.js`!

#### Export the `addThree` function as default

The only difference between a named export and a default export is that the default export is prefaced with `export default` instead of `export`.

For example, this will export a function named `doStuff` as a default export:

```js
export default function doStuff() { ... }
```

👉 Export the `addThree` function from `add.js` as the default export.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#export-default).

Your test should now be passing! You've exported a default function from `add.js`, imported it into `add.spec.js` as `addThree`, and verified that it works correctly! #doubleHighFive

### Extra Credit

- Read about [modern JS development](https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70)
