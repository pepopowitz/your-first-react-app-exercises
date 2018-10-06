# Exercise 1
## Modern JS - Modules


-1. get latest
  a. git checkout master
  b. git pull

0. Get your test suite running
  a. npm run test-module-1
  b. You should see this test output (show)

1. Test - 'adds two numbers'
  a. Import the `add` function (as a named import)
  b. Mark the `add` function as a named export
  c. Convert test to fat-arrow

2. Test - 'adds 2 to something'
  a. Import the `addThree` function (as a default import)
  b. Mark the `addThree` function as a default export
  c. Rename the `addThree` function

3. Show an import from npm (import React from 'react')

---

# Exercise 3
## Class Syntax


0. Get your test suite running
  a. npm run test-module-3
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

4. Test - "it adds it up" (L! class props/event handlers)
  a. Convert to class property/fat arrow
  b. Right now, not much difference in "this", but when we get to event handling in React, we'll see some differences.
  c. Implicit return

  ---

# Exercise 4
## Modern JS - Working with Objects

0. Get your test suite running
  a. npm run test-module-1
  b. You should see this test output (show)

1. Test - "it builds a greeting" (M! template literals)
  a. Uncomment test
  b. Test fails!
  c. Write with concatenation
  d. Write with string template literal

2. Test - "it chooses a parting word" (N! ternary)
  a. Uncomment test
  b. Test fails!
  c. Write with if statement
  d. Write with ternary

3. Test - "it chooses a parting word with destructuring" (O! destructuring)
  a. Uncomment test
  b. Test fails!
  c. Write with manual property assignment
  d. Write with destructuring in the body
  e. Write with destructuring in arguments

4. Test - "it maps parting words" (P! array.map)
  a. Uncomment test
  b. Test fails!
  c. Write with looping
  d. Write with array.map
