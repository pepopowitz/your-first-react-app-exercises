# Exercise 7

## Three Ways To Style

There are many ways to style a React app. In this exercise, you'll compare and contrast three different ways.

👉 Start the app for Exercise 7

In a console window, pointed at the root of this project, run `npm run start-exercise-7`.

This should open a browser window pointed at localhost:3000, showing a web app titled "Exercise 7: Styling - Component CSS Files", and our three adorable kitten friends. If it doesn't, ask your neighbor for assistance or raise your hand.

### Background

One thing is common among most ways to style a React app: they involve co-locating your CSS with your components.

In this exercise, we've styled the app three different ways - with component CSS files, CSS Modules, and Styled Components.

### Component CSS Files

The component CSS file method of styling an app involves putting styles for a component in an associated CSS file.

#### Explore Component CSS Files

👉 Open the `/1-component-css-files` folder.

In it, you'll see that each component `___.js` has an associated `___.css` file. Each of these css files contains the styles for its component, and its component only.

👉 Open a component `.js` file and its corresponding `.css` file.

👉 Answer some questions.

1. How does a component CSS file get included in our app? [See here for answer](SOLUTIONS.md#1-1)

2. How does this method of including a dependency differ from the other dependencies included in a component file? [See here for answer](SOLUTIONS.md#1-2)

### CSS Modules

CSS Modules attempt to solve a frustrating problem that many developers struggle with - CSS scope conflicts.

CSS Modules look like a similar strategy to Component CSS Files, in that there is a single CSS file associated with each component. However, a CSS Module gets compiled into a set of styles that are locally scoped, using a unique hash for every component. When a CSS Module is compiled, it becomes a JavaScript object, with properties for every style defined in the CSS Module. A JavaScript file that imports a CSS Module can reference the styles in the module via properties on the import.

If you'd like to read more about CSS Modules, visit https://github.com/css-modules/css-modules.

#### Switch to a CSS Module implementation

👉 In `index.js`, comment out line 4 (which tells the app to use component CSS files), and uncomment line 5 (which tells the app to use CSS Modules).

You should see the color of the app change from green to purple in your browser, and the subtitle should change to indicate it is using CSS Modules.

#### Explore CSS Modules

👉 Open the `/2-css-modules` folder.

Inside this folder you'll see that again, there is a single `.css` file for each component.

Notice that every CSS file name ends with `.module.css`. This is an implementation detail of create-react-app, the tool that was used to generate the app. This naming convention is not required to use CSS Modules in general, but is required to use them with create-react-app.

👉 Open a component `.js` file and its corresponding `.module.css` file.

👉 Answer some questions.

1. How does a CSS Module get included in our app? How is this different from a component CSS file? [See here for answer](SOLUTIONS.md#2-1)

2. How is a style in a CSS Module used in a component? [See here for answer](SOLUTIONS.md#2-2)

3. On line 13 of `App.js`, there is a call to a function named `classNames`. What do you think this statement is doing? [See here for answer](SOLUTIONS.md#2-3)

4. In your browser, inspect an element that is styled with a CSS Module. What do you notice about the class associated with the element, and why do you think that is? [See here for answer](SOLUTIONS.md#2-4)

### Styled Components

Styled Components are very different from the first two approaches. Instead of having a separate CSS file for every component, all styling happens inside of each component - as JavaScript.

To define styles for a component with Styled Components, you create a React component that defines nothing but styles, then render it as a child of your component.

Each Styled Component is compiled, and uses local scope like CSS Modules - so it also solves the frustrating problem of CSS scope conflicts.

#### Switch to a Styled Components implementation

👉 In `index.js`, comment out line 5 (which tells the app to use CSS Modules), and uncomment line 6 (which tells the app to use Styled Components).

You should see the color of the app change from purple to green in your browser, and the subtitle should change to indicate it is using Styled Components.

#### Explore Styled Components

👉 Open the `/3-styled-components` folder.

Inside this folder you'll see that there are no `.css` files. This is because all component styles are within each `.js` file.

👉 Open the `App.js` file.

On line 2, we `import styled from 'styled-components'`. This is the library we use to build Styled Components.

The `styled` object exposes one helper for any HTML element that you would want to style.

On lines 7-9, we use the `styled.div` helper to create a `div` element with style `text-align: center`. But immediately following the word `div` is a pair of backticks (`), with what looks like CSS inside them.

This is called a [tagged template](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates). Tagged templates are a newer feature of JavaScript that allow you to parse a template literal with a function. In this example, the function is the `div` helper of `styled`. The template literal being parsed is the content between the backticks immediately following the word `div`.

The contents of the template literal for a Styled Component are the CSS that you want to apply to the element.

We looked at template literals earlier in the workshop. Remember that you can inject values in a template literal with `${...}`. This means we can inject any JavaScript into the CSS for an element!

👉 Answer some questions.

1. How is the `AppDiv` component used? How do you think this element will render in the browser? [See here for answer](SOLUTIONS.md#3-1)

2. In your browser, use the dev tools to find the `AppDiv` element. What does the class name look like? [See here for answer](SOLUTIONS.md#3-2)

3. On line 14 of `App.js`, in the `AppHeader` component, we are using string interpolation to inject the value `theme.white`. What do you think is the intention of this code? [See here for answer](SOLUTIONS.md#3-3)
