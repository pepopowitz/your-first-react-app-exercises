# Exercise 11

## CSS Modules

In this exercise, we'll be converting from component CSS files to CSS Modules.

👉 Start the app for Exercise 11

In a console window, pointed at the root of this project, run `npm run start-exercise-11`.

This should open a browser window pointed at localhost:3000, showing a web app titled "Exercise 11: CSS Modules", and our three adorable but unstyled kitten friends. If it doesn't, ask your neighbor for assistance or raise your hand.

### Background

All of our component-specific CSS files are here, but the only one that seems to be having an effect is the App.css.

### How are CSS Modules different from component CSS files?

#### They're imported differently

👉 Open the App.js file.

The first difference between component CSS files and CSS Modules is that the stylesheets are imported differently.

With a component CSS file, we would have seen our styles imported like this:

```jsx
import 'styles.css';
```

With CSS modules, we now import our styles as a named import, like below:

```jsx
import styles from 'styles.css';
```

This gives us a `styles` object we can reference in our component. This object contains properties for every class we define in the `styles.css` file.

#### The `className` is referenced differently

With a component CSS file, we referenced our CSS classes as static strings, like below:

```jsx
<div className="App">...</div>
```

With CSS Modules, we use our imported `styles` object, and specify the class name as a property on that object. We wrap this expression in curly braces (`{}`), like below:

```jsx
<div className={styles.app}>...</div>
```

This will pick up any styles associated with the `.app` selector in `styles.css`.

#### Classes are named differently (though they don't _need_ to be)

👉 Open the App.css file.

In our component-based CSS files, we were using names that had dashes, like `app-title` below:

```css
.app-title {
  ...;
}
```

When we're referencing properties on the imported `styles` object in our component, doing something like `styles.app-title` isn't valid JavaScript.

One way we could get around this is to use a string-based property accessor instead - like `styles['app-title']`.

Another way, and the way we've chosen in this app, is to remove dashes from our CSS class names, like below:

```css
.appTitle {
  ...;
}
```

This allows us to reference `styles.appTitle` in our component.

### What gets rendered by a CSS Module?

👉 Inspect a styled element in your browser.

Notice the class name associated with the element - it will look something like `App__appHeader___13lYj`.

CSS modules are compiled into a stylesheet where every class name is unique. This allows you to write CSS that affects one component and one component only. If you struggle with specificity or the "cascading" part of CSS, CSS Modules (or something similar) can simplify styling for you.

### Convert the remaining components to CSS Modules

The remaining components in the exercise - `Card`, `FriendProfile`, and `Page` - are written to use component CSS files, which is why they don't appear to be styled.

👉 Convert the `Card`, `FriendProfile`, and `Page` components to use CSS Modules.

If you get stuck, see the `./complete` folder for possible solutions.

### Combining class names

One interesting problem with CSS Modules is that applying multiple classes to an element is not as simple as in component CSS files.

In component CSS files, we could apply multiple classes by simply listing them in the `className` attribute, like this:

```jsx
<h1 className="app-title emphasize">Exercise 11</h1>
```

With CSS Modules, we apply class names through evaluated JavaScript expressions. This means we have to manually combine multiple class names with spaces between them, like this:

```jsx
<h1 className={styles.appTitle + ' ' + styles.emphasize}>Exercise 11</h1>
```

An alternative to this is to use a popular microlibrary named `classnames`. The `classnames` library takes care of adding spaces between multiple class names. Using `classnames`, we apply multiple class names like this:

```jsx
import classNames from 'classnames';

...

<h1 className={classNames(styles.appTitle, styles.emphasize)}>Exercise 11</h1>
```

Aside from combining multiple class names, the `classnames` library also makes it easier to apply _conditional_ class names.

👉 Modify the `h1` in `App.js` to apply both the `styles.appTitle` and `styles.emphasize` styles.

Use the method you prefer from the above options (manually inserting spaces, or using the `classnames` library).

If you get stuck, see [`./complete/App.js`](./complete/App.js) for a possible solution.

### Extra Credit

- Read a [comparison of CSS Modules to another approach for styling in React - CSS-in-JS](https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e).
