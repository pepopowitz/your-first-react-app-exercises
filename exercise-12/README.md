# Exercise 12

## Modern JavaScript: Class Syntax

This exercise introduces you to the class syntax feature utilized by legacy React components.

We'll be working with unit tests again.

### Prerequisites

- If you're unfamiliar with "fat-arrow" syntax (`(args) => {}`) for defining anonymous functions, [read about them](../junk-drawer/ANONYMOUS-FUNCTIONS.md).

- If you're unfamiliar with writing unit tests in JavaScript, or the Jest test framework, [read about them](../junk-drawer/TESTING.md).

### Get Started

👉 Start your test suite. Open a new command window at the root of this project, and enter `npm run test-exercise-12`.

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

We're going to be working with two files in the `exercise-12` folder: `kitten.spec.js` to write our tests, and `kitten.js` to make the tests pass.

👉 Open the `kitten.spec.js` and `kitten.js` files side-by-side.

The tests in `kitten.spec.js` are commented out, and we'll uncomment them one at a time. `kitten.js` contains two classes that we'll be building out.

### Classes In JavaScript

If you're familiar with classes in an object-oriented language like C# or Java, you'll have an easy time with the class syntax in JavaScript. They look pretty similar, and for the most part, they function similarly to classes in other languages.

Take a look at the `kitten.js` file. You can see that we're defining two classes - a `Mammal`, and a `Kitten`. 

```js
export class Mammal {

}

export class Kitten {

}
```

We define a class with the keyword `class`. We haven't defined any instances of a Mammal or a Kitten yet. 

### Instantiating A Class

Given a class, we can create instances of it with the `new` keyword.

👉 Uncomment `Test 1`, named "it is a thing", in `kitten.spec.js`.

Save `kitten.spec.js`, and you should get a passing test in your terminal:

```
 PASS  exercise-12/things.spec.js
  ✓ is a thing (4ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.235s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.
```

This test is creating a new instance of a `Kitten` using the `new` keyword, the class name, and some parentheses:

```js
    const kitten = new Kitten();
```

Legacy React components are written as classes. In a typical legacy app we don't do much instantiation ourselves - React will take care of this for us, behind the scenes.

### Instance Properties

Classes aren't very useful without properties or methods on them. Let's add a property to our `Kitten` class.

👉 Uncomment `Test 2`, named "it has whiskers", in `kitten.spec.js`.

This test creates an instance of a `Kitten`, then checks for an _instance property_ named `hasWhiskers`. 

When you save the test file, you should get a failing test:

```
 FAIL  exercise-12/kitten.spec.js
  An instance of Kitten
    ✕ has whiskers (3ms)

  ● An instance of Kitten › has whiskers

    expect(received).toEqual(expected)

    Expected value to equal:
      true
    Received:
      undefined

    Difference:

      Comparing two different types of values. Expected boolean but received undefined.

      13 |     const kitten = new Kitten();
      14 |
    > 15 |     expect(kitten.hasWhiskers).toEqual(true);
         |                                ^
      16 |   });
      17 |
      18 |   // // Test 3

      at Object.toEqual (exercise-12/kitten.spec.js:15:32)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.214s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.
```

Our `Kitten` class doesn't have any properties on it. We need to add one.

Instance properties in JavaScript classes use the syntax 

```js
class Thing {
  someProperty = "initialValue"
}
```

- There is no `let` or `const` or `var` associated with a property declaration. 

- If the property needs to be initialized, the initial value appears on the right-hand side of an assignment (`=`) operator. If you don't specify an initial value, the property is initialized to `undefined`.

👉 Add a property named `hasWhiskers` to the `Kitten` class. Initialize it to `true`.

You'll know you succeed when your tests are passing again.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#instance-properties).

### Inheritance

A JavaScript class can inherit from another class, using the `extends` keyword. When a class extends another, all methods and properties of the base class are available on instances of the extended class.

The syntax for extending a class looks like this:

```js
class BaseClass {
}

class ExtendedClass extends BaseClass {
}
```

👉 Uncomment `Test 3`, named "it has hair because all mammals do", in `kitten.spec.js`.

When you save the test file, you should get a failing test:

```js
 FAIL  exercise-12/kitten.spec.js
  An instance of Kitten
    ✓ is a thing (1ms)
    ✓ has whiskers (1ms)
    ✕ has hair because all mammals do (5ms)

  ● An instance of Kitten › has hair because all mammals do

    expect(received).toEqual(expected)

    Expected value to equal:
      true
    Received:
      undefined

    Difference:

      Comparing two different types of values. Expected boolean but received undefined.

      20 |     const kitten = new Kitten();
      21 |
    > 22 |     expect(kitten.hasHair).toEqual(true);
         |                            ^
      23 |   });
      24 |
      25 |   // // Test 4

      at Object.toEqual (exercise-12/kitten.spec.js:22:28)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 2 passed, 3 total
Snapshots:   0 total
Time:        0.253s, estimated 1s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.
```

As you'd expect by this failing test, our `Kitten` class should extend the `Mammal` class, but currently does not. 

👉 Modify the `Kitten` class to extend the `Mammal` class.

You'll know you succeed when your tests are passing again.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#inheritance).

### Instance Methods

An instance of a class can also have methods. We're going to add one to our `Kitten` class.

👉 Uncomment `Test 4`, named "it has hair and whiskers", in `kitten.spec.js`.

You should see a failing test when you save the file:

```js
 FAIL  exercise-12/kitten.spec.js
  An instance of Kitten
    ✓ is a thing (1ms)
    ✓ has whiskers (1ms)
    ✓ has hair because all mammals do
    ✕ has hair and whiskers (6ms)

  ● An instance of Kitten › has hair and whiskers

    TypeError: kitten.hasHairAndWhiskers is not a function

      27 |     const kitten = new Kitten();
      28 |
    > 29 |     expect(kitten.hasHairAndWhiskers()).toEqual(true);
         |                   ^
      30 |   });
      31 |
      32 |   // // Test 5

      at Object.hasHairAndWhiskers (exercise-12/kitten.spec.js:29:19)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 3 passed, 4 total
Snapshots:   0 total
Time:        0.226s, estimated 1s
Ran all test suites related to changed files.

Watch Usage: Press w to show more. 
```

This test failure indicates that there is no method named `hasHairAndWhiskers` on the `Kitten` class. Let's add one!

In the example below, we've defined an instance method named `someMethod`:

```js
class Thing {
  someProperty = "initialValue"

  someMethod(arg1) {
    console.log(arg1, this.someProperty);
  }
}
```

- There is no `function` keyword when declaring the instance method

- The function name is followed by an argument list in parentheses, and the method body in curly braces

- An instance method has access to any properties or methods on the class instance, and accesses them with `this.` followed by the property/method name

👉 Add a method named `hasHairAndWhiskers` to the `Kitten` class. Return true if both `hasWhiskers` and `hasHair` are true for the `Kitten` instance.

You'll know you succeed when your tests are passing again.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#instance-methods).

### Instance Methods As Properties

There's a second way to add instance methods to a class: create an instance property, and assign it a fat-arrow function. 

👉 Uncomment `Test 5`, named "it meows", in `kitten.spec.js`.

When you save the tests, you'll see a failing test.

```js
 FAIL  exercise-12/kitten.spec.js
  An instance of Kitten
    ✓ is a thing (1ms)
    ✓ has whiskers
    ✓ has hair because all mammals do (1ms)
    ✓ has hair and whiskers
    ✕ meows (2ms)

  ● An instance of Kitten › meows

    TypeError: kitten.meow is not a function

      34 |     const kitten = new Kitten();
      35 |
    > 36 |     expect(kitten.meow()).toEqual('meow');
         |                   ^
      37 |   });
      38 | });
      39 |

      at Object.meow (exercise-12/kitten.spec.js:36:19)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 4 passed, 5 total
Snapshots:   0 total
Time:        0.228s, estimated 1s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.
```

This test is failing because we haven't implemented an instance method named `meow`.

Adding an instance method as a property looks like this:

```js
class Thing {
  someProperty = "initialValue"

  someMethod = (arg1) => {
    console.log(arg1, this.someProperty);
  }
}
```

This is pretty similar to adding a plain instance method, with a couple differences:

- `someMethod` is a property, so it is followed by an assignment operator (`=`)

- The right side of the assignment is a fat-arrow function

- The fat-arrow function also has access to all properties and methods of the instance, by accessing `this.`

Why would we do this instead of just creating a typical instance method? We'll get to this in an upcoming exercise.

👉 Add an instance property named `meow` to the `Kitten` class, assigned a fat-arrow function. Make the function return the word "meow".

You'll know you succeed when your tests are passing again.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#instance-methods-as-properties).

### Extra Credit

- Read about [prototypal inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain), and how it differs from classical inheritance.
