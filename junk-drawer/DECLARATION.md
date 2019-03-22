# Declaring variables in modern JavaScript

## `var`

Historically, the `var` keyword has been used to declare a variable.

```js
var name = 'Potatoes';
console.log(name); // Potatoes
```

Modern JavaScript includes two new keywords for declaring variables: `let` and `const`.

## `let`

The `let` keyword is used to define a variable that can change. For example:

```js
let name = 'Potatoes';

if (someCondition) {
  name = 'Flower';
}
```

## `const`

The `const` keyword is used to define a variable whose value will not change. For example, the following code would throw an error when `someCondition` is true:

```js
const name = 'Potatoes';

if (someCondition) {
  name = 'Flower'; // This would throw an exception, since name was defined with `const`.
}
```

## Block scoping

Another significant difference between the `var` keyword and the `let`/`const` keywords is that a variable defined with `var` is scoped to a function, while `let`/`const` variables are scoped to a block (effectively the nearest set of curly braces).

For example, in the following:

```js
function aFunction() {
  var someCondition = true;

  if (someCondition) {
    var oneVar = 1;
    let twoLet = 2;
    const threeConst = 3;
  }

  console.log(oneVar); // 1
  console.log(twoLet); // undefined
  console.log(threeConst); // undefined
}
```

All three variables `oneVar`, `twoLet`, and `threeConst` are defined within the same block - the body of the condition `if(someCondition)`. All code within the `aFunction` has access to `oneVar`, because it was defined with `var`. Only the code within the `if(someCondition)` block have access to `twoLet` and `threeConst`, because they were defined with `let` and `const`.

## In this course

We'll be using `let` and `const` for all variable declarations in this course, instead of `var`.

There are subtleties to what it means for a `const` variable to "not change", but that won't be important in this course.
