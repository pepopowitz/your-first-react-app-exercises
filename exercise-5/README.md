# Exercise 5

## JSX Fundamentals

This exercise will introduce you to JSX syntax. JSX is a powerful hybrid of JavaScript and XML, used most often in React components.

You'll use JSX to render different types of things to the browser.

👉 Start the app for Exercise 5

In a console window, pointed at the root of this project, run `npm run start-exercise-5`.

This should open a browser window pointed at localhost:3000, showing a web app titled "Exercise 5: JSX Fundamentals". If it doesn't, ask your neighbor for assistance or raise your hand.

👉 Open Exercise.js

All of your work for this exercise will take place in Exercise.js.

### Static HTML

JSX can be used to render static HTML. Currently, Exercise.js is rendering a single `div` element.

👉 Modify the `Friends` function component to render an `h1` element as a child of the `div`.

Inside the h1, place some static text, like "Hello, Friends!".

Check your browser to see if you succeeded! You should see your static html rendered.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#static-html).

### Evaluating JavaScript Expressions

JSX is much more powerful than simple static HTML. We can tell our JSX to evaluate any JavaScript expression with curly braces (`{}`).

Curly braces can be placed inside any element of your JSX. Any JavaScript expression that can be evaluated can be placed inside the braces.

For example, this JSX...

```jsx
<div>{2 + 1}</div>
```

would evaluate `2+1`, and render the following element to the browser:

```html
<div>3</div>
```

You won't evaluate many expressions like that while building a React app. Here are some you're more likely to see:

#### Evaluating a variable

The value of any variable can be rendered in your component.

For example, if we had a variable declared as `const total = 3` in our component, this JSX...

```jsx
<div>{total}</div>
```

would render this element to the browser:

```html
<div>3</div>
```

Currently, `Friends.js` has a variable defined named `greeting`.

👉 Add an `h2` element that displays the value of `greeting` in your `Friends` component.

Check your browser to see if you succeeded! You should see your greeting rendered.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#evaluating-a-variable).

#### Evaluating a function

A function can be executed from inside our JSX, by calling it within the curly braces.

For example, the following JSX:

```jsx
<div>{add(1, 2)}</div>
```

would execute `add(1, 2)`, and render the result to the browser as the following element:

```html
<div>3</div>
```

`Friends.js` contains a function named `emphasize`. It takes a string, and returns the string emphasized with exclamation points.

👉 Modify the `h2` element in your `Friends` component to call `emphasize` on the `greeting` variable.

Check your browser to see if you succeeded! You should see your greeting emphasized.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#evaluating-a-function).

### Attributes

Attributes are attached to elements in JSX the same way they are in HTML or XML. For example, this JSX...

```jsx
<div id="title">Hello, Friends!</div>
```

will render this element:

```html
<div id="title">Hello, Friends!</div>
```

There are a couple of sneaky things to know about attributes in JSX.

#### className

Most attributes you assign to a JSX element translate directly to the corresponding HTML attribute. In the example of, `id` in JSX translated directly to `id` in the browser.

One important outlier is the `class` attribute.

To emit a `class="..."` attribute in your element, you need to use the `className` attribute in your JSX.

Side note: Why do you think this is? Why would `class` be different than any other attribute in JSX? We'll discuss after the exercise.

👉 Add a CSS class named `friends-title` to the `h1` in your `Friends` component.

Check your browser to see if you succeeded! You should see your `Hello, Friends` title turn blue-green.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#className).

#### Evaluating attributes

Just like with children of elements, we can evaluate JavaScript expressions to determine the values of attributes. We simply use the curly braces, instead of quotes, to signify that the value of the attribute is a JavaScript expression.

For example, this JSX...

```jsx
<div id={'friend_' + add(1, 2)}>Potatoes</div>
```

would render this element to the browser:

```html
<div id="friend_3">Potatoes</div>
```

`Friends.js` contains a function named `determineGreetingClass`. It takes no arguments, and returns one of two CSS class names, based on the current clock ticks (effectively a random number).

👉 Add a CSS class to the `h2` greeting element, based on the result of the `determineGreetingClass` function.

Check your browser to see if you succeeded! You should see your greeting message turn either orange or purple.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#evaluating-attributes).

### Rendering arrays

One of the things you'll do frequently in React development is render an array of items. There are a couple secrets to rendering an array.

#### Array.map

Remember that JSX is an extension of JavaScript. Anything we can do in JavaScript, we can also do in JSX.

To render items in an array, we take advantage of the `Array.map` prototype function, and display something for each item.

For example, imagine we had an array of integers defined as `const items = [1, 2, 3]`. We want to display an unordered list (`ul`) of the items in this array.

This JSX...

```jsx
<ul>
  {items.map(item => {
    return <li>{item}</li>;
  })}
</ul>
```

would render this element to the browser:

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

For each element in the items array, an `li` element would be rendered; the contents of each resolves to the value of `{item}`.

`Friends.js` contains an array named `myFriends`.

👉 Following the `h2` greeting of your `Friends` component, render a list of names, based on the `myFriends` variable.

Check your browser to see if you succeeded! You should see your friends' names listed below the greeting.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#arraymap).

Preferences vary in regards to mapping over arrays inline (directly in the JSX), defining variables that contain the mapped arrays (and then referencing them in the returned JSX), or calling a function to map an array (and calling it in the returned JSX). You will develop a preference over time.

#### key

You might notice a message in your browser console after the previous task:

`Warning: Each child in an array or iterator should have a unique "key" prop.`

When rendering an array of items, React prefers that each item rendered have a unique `key` property. This allows React to optimize how elements are rendered to the DOM. It can use this `key` property to identify which items have changed, and which haven't, and update only the ones that have changed.

To eliminate this message, and improve the performance of our rendered list, we can specify a `key` prop on our rendered items.

It's important that our key be something that is specific to the item being rendered - often, an ID is a great fit.

For example, in our previous example, we could render a key for each item with the following JSX:

```jsx
<ul>
  {items.map(item => (
    <li key={item}>{item}</li>
  ))}
</ul>
```

👉 Add a `key` prop to the items being rendered in your friends list. Use a property from the `myFriends` items that is semantic & unique to each item.

Check your browser to see if you succeeded! You should not see any error messages in your browser console.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#array-keys).

### Conditional rendering

Components often need to display one thing under one condition, and something different under another condition.

JSX is based on JavaScript, so we can use simple `if` conditions to render conditional elements.

For example, this JSX...

```jsx
if (name === 'Potatoes') {
  return <div>You're my favorite friend!</div>;
}
return <div>You're okay, I guess.</div>;
```

would render a div based conditionally on the name.

This same condition can also be accomplished using a ternary operator:

```jsx
return (
  <div>
    {name === 'Potatoes'
      ? "You're my favorite friend!"
      : "You're okay, I guess."}
  </div>
);
```

> Note: See the `(` after the keyword `return`? When we return a JSX element that takes up more than one line, we wrap it in parentheses. This tells the `return` statement that we are going to give it a return value on the next lines. This is an easy thing to forget!

Some items in the `myFriends` array have ages; some don't.

👉 Conditionally display the age of each friend. If it exists, display it in parentheses next to the name. If it doesn't, display nothing.

Check your browser to see if you succeeded! You should see ages next to some friends, but not others.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#conditional-rendering).
