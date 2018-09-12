# Exercise 1
## Modern JavaScript: Modules

This exercise introduces you to the module import & export features utilized in modern JavaScript applications.

### Setup

This exercise utilizes unit tests for demonstration purposes. You don't need to know much about unit tests coming in. 

&#128073; Start your test suite. Open a new command window at the root of this project, and enter `npm run test-exercise-1`.

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

### Background

Modules are a way to share and reuse code. If you've used `require('...')` before, you've used modules. Languages other than JavaScript also have module systems that you might have used. Modules, put simply, allow you to write code in one file, and include it in others. 

The `import` & `export` keywords were introduced in ES2015 to provide a standard JavaScript module system. CommonJS and AMD module systems predated the ES2015 module system, but building a module system into JavaScript simplifies sharing modules.

The basic syntax for modules in modern JavaScript is simple: you `export` a module from one file, and `import` it into another.

### Default Import/Export

Every file can have exactly one default export. This ......

is this too much????? just walk them through it???

---

## instructor notes

0. Get your test suite running
  a. npm run test-module-1
  b. You should see this test output (show)
1. Write a test of our `add` function.
  a. Uncomment the test (in ./add.spec.js) (A!)
  b. Import the `add` function (as a default import) (B!)
  c. Mark the `add` function as a default export (C!)
2. Write a test of our `addThree` function.
  a. Uncomment the test in ./add.spec.js (A!)
  b. Import the `addThree` function (as a named import) (D!)
  c. Mark the `addThree` function as a named export (E!)
3. Show an import from npm (F!)


