# Exercise 6
## render() Results

The `render()` method of a React component can return any of 6 kinds of objects. This exercise will introduce you to the 5 most frequently returned kinds of objects.

👉 Start the app for Exercise 6

In a console window, pointed at the root of this project, run `npm run start-exercise-6`.

This should open a browser window pointed at localhost:3000, showing a web app titled "Exercise 6: render() Results". If it doesn't, ask your neighbor for assistance or raise your hand.

👉 Open Exercise.js

All of your work for this exercise will take place in Exercise.js.

### Elements/React Components

Most frequently, a `render()` method will return either an HTML element, or another React component.

Currently, the `Friends` component is returning an HTML element - a single `<div>`. Most of the examples we've seen so far have returned HTML elements.

There is a second component in `Exercise.js` - the `FriendProfile` component.

👉 Modify the `Friends` component to return a single `<FriendProfile>` element. Pass the name of the first item in the `myFriends` array as a prop to the `<FriendProfile>`.

Check your browser to see if you succeeded! You should see the name `Potatoes` rendered.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#react-components).

👉 "Inspect element" in your browser, and look for the elements rendered by the `<FriendProfile>` component.

You should see that the component is rendered as a div with text content.

### Fragments

Valid JSX requires a single top-level element (similar to how valid XML requires a single top-level element). To demonstrate this, we're going to break our app.

👉 Modify the `Friends` component to return an `<h1>` element adjacent to the `<FriendProfile>` element. 

You should see an error in your browser, similar to this:

```
./exercise-6/Exercise.js
Syntax error: C:/.../your-first-react-app-exercises/exercise-6/ExerciseFinished.js: Adjacent JSX elements must be wrapped in an enclosing tag (7:6)

   5 |     return (
   6 |       <h1>hello, friends!</h1>
>  7 |       <FriendProfile name={myFriends[0].name} />
     |       ^
   8 |     );
   9 |   }
  10 | }
```

As the error indicates, this is invalid syntax.

We can fix this a couple ways.

#### Wrapping in a `<div>`

👉 Modify the `Friends` component so that the `<h1>` and `<FriendProfile>` elements are wrapped in a `<div>` element. 

Check your browser to see if you succeeded! You should see your title emitted, along with the name `Potatoes`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#wrapping-in-a-div).

👉 "Inspect element" in your browser, and find the elements rendered by the `<Friends>` component.

You'll see that your components are wrapped in a `<div>` - the one you used to wrap the `<h1>` and `<FriendProfile>` elements.

This solves the problem...but it adds elements to the DOM that we don't really need. One element might not seem like a big deal, but in a large React app, we can end up with significant DOM pollution from this practice. 

React v16 introduced a way to solve this problem - the `Fragment`.

#### Wrapping in a `<Fragment>`

The `Fragment` component is basically an empty wrapper. It allows us to provide a single top-level element when we are rendering multiple child elements, but it does not actually render anything to the DOM.

You can access the `Fragment` component on the default `React` import (i.e. `React.Fragment`).

👉 Replace the wrapping `<div>` element in the `Friends` component with a wrapping `<React.Fragment>` element.

Check your browser to see if you succeeded! You should still see all friends listed.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#wrapping-in-a-fragment).

👉 "Inspect element" in your browser, and find the elements rendered by the `<Friends>` component.

You should see that there's no longer an unnecessary div wrapping your output.

### Arrays

Sometimes you want to turn an array of data into an array of elements. This can be accomplished with `Array.map`, as we saw in the JSX Fundamentals exercise.

👉 Modify the `Friends` component to return one `<FriendProfile>` element for each item in the `myFriends` array. For each item, pass the `name` and `age` as props to the `<FriendProfile>`.

Don't forget that React wants you to use a `key` prop when you render an array of items!

Check your browser to see if you succeeded! You should see each of the friends listed.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#arrays).

👉 "Inspect element" in your browser, and find the elements rendered by the `<Friends>` component.

You should see a `<div>` for each friend.

### Strings/Numbers

Sometimes you want a component to render nothing more than a string or number. When a `render()` method returns a string or number, it gets rendered as a text node in the DOM.

👉 Modify the `FriendProfile` component to render only the `name` prop. 

Check your browser to see if you succeeded! You should see each of the friends listed, abutted against each other.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#strings-or-numbers).

👉 "Inspect element" in your browser, and find the elements rendered by the `<Friends>` component.

You will see that the friend names are rendered as text nodes, all within the same `<div>`.

### null

Sometimes we don't want a component to render anything at all. This is usually true when we are using conditional logic to render different results based on inputs. 

When the value `null` is returned from a component's `render` method, nothing gets rendered to the DOM. 

👉 Modify the `FriendProfile` component's `render` method to return `null` if the `age` prop is undefined; otherwise return the value of the `name` prop. 

Check your browser to see if you succeeded! You should see two of the friends listed - Potatoes and Flower.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#null).
