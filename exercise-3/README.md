# Exercise 3
## Modern JavaScript: Class Syntax

This exercise introduces you to the class syntax feature utilized in modern JavaScript applications. 

The instructor will lead you through some code examples. Follow along!

### Setup

This exercise utilizes unit tests for demonstration purposes. You don't need to know much about unit tests coming in. 

👉 Start your test suite. Open a new command window at the root of this project, and enter `npm run test-exercise-3`.

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

### Follow Along

The instructor will help you rewrite unit tests using class syntax. 



## instructor notes

0. Get your test suite running
  a. npm run test-module-1
  b. You should see this test output (show)
1. Test - "it is a thing"
  a. Uncomment the first test
  b. Test should pass!
  c. Talk about declaration (G! class definition)
  d. Talk about instantiation (H! class usage)
2. Test - "it inherits base properties" 
  a. Uncomment the test
  b. Test should fail
  c. Add thingOneProperty to ThingOne (J! class properties)
  d. Add thingTwoProperty to ThingTwo
  e. Test still fails
  f. ThingTwo extends ThingOne (I! extends)
  g. Tricky differences - prototypal inheritance (interview question)
3. Test - "it adds it up" (K! instance methods)
  a. Uncomment the test
  b. Test should fail
  c. Write instance method additup()
  d. talk about "this".
4. Test - "it subtracts" (L! class props/event handlers)
  a. Uncomment the test
  b. Test should fail
  c. Write instance method subtractIt
  d. Convert to class property/fat arrow
  e. Right now, not much difference in "this", but when we get to event handling in React, we'll see some differences.
