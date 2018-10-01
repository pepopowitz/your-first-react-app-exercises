# Exercise 10
## Component CSS Files

When building a React app, it's important to colocate your CSS with your components. In this exercise, you'll move styles from a global CSS file into component-specific CSS files.

&#128073; Start the app for Exercise 10

In a console window, pointed at the root of this project, run `npm run start-exercise-10`.

This should open a browser window pointed at localhost:3000, showing a web app titled "Exercise 10: Component CSS Files", and our three adorable kitten friends. If it doesn't, ask your neighbor for assistance or raise your hand.

### Background

In this exercise, we've moved components into their own files. `Exercise.js` no longer contains all of the components - it merely imports and renders the `<Friends>` component from another file. `Friends.js` in turn imports the `<Page>` and `<FriendProfile>` components from other files. And so on.

What we didn't do yet is break the CSS into component-specific CSS files. You'll do that now!

&#128073; Break the styles in App.css into the appropriate `(component).css` file.

You will need to create the .css files for each component.

Remember that styles get imported into a component, via an import statement like:

```javascript
import './MyComponent.css'
```

Check your browser to make sure you succeeded.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#component-css-files).

&#128073; Modify the colors of the app.

Teal is so 2017. Choose a different color scheme for the app, and make the appropriate changes in the (component).css files.

Check your browser to make sure you've changed the colors!
