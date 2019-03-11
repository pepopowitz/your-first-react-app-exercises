# Answers

## 1. Component CSS Files

### 1-1

CSS files are included in each component using `import '___.css'`.

When the app is compiled with webpack, this import indicates that the component has a dependency on the CSS file, and it will include it in the build.

### 1-2

Imported JavaScript dependencies include an identifier for the module being imported (i.e. `import dependency from 'dependency'), while imported CSS files do not (i.e.`import 'styles.css'`).

This is because JavaScript dependencies are only imported if your code needs to interact with them. CSS dependencies aren't interacted with, so they don't need an identifier.

## 2. CSS Modules

### 2-1

A CSS Module is imported into a component using `import styles from '___.module.css'`. This is different from component CSS files in that we are giving the imported module an identifier - `styles`.

### 2-2

This `styles` object imported from the CSS Module contains properties for every style we define in the `styles.css` file. We use that object to specify which style from the module to use on an element.

For example, if the CSS Module contained a style `.title { ... }`, in the associated component we would use it with `<h1 className={styles.title}>`.

### 2-3

The `classNames` library is used to combine CSS Module class names.

In the example specified, we are saying that this element should use both the `subTitle` and `emphasize` styles.

We could probably combine these names ourselves, without the `classNames` library. `classNames` is a handy helper, though, and can also be used to combine styles conditionally. If you're using CSS Modules in a project, there's a good chance you'll also want to use `classNames`.

### 2-4

The class name looks generated, and contains a hash, like this - `Card_card__9mB3O`.

This is because CSS Modules is compiling our styles, and it gives each class a unique name to avoid conflicts.

## Styled Components

### 3-1

On line 24, we render the `AppDiv` element in our `App` component, like this:

```
  <AppDiv>
    ...
  </AppDiv>
```

We can do this, because a Styled Component is just another React component!

### 3-2

Similarly to the CSS Module class, the Styled Component class name contains a hash. As you might expect, this is so that the class is uniquely named, and we don't have to deal with style conflicts.

### 3-3

The theme colors are defined in a separate JavaScript file, and we are injecting them here! This would be a great way to manage themes in one place, and have them consumed throughout the app. If we decide the theme colors need to change, we can change them in one place, instead of a bunch of CSS files!
