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
