# Exercise 10

## Loading Data

This exercise introduces you to a method of loading data from an API in a React component.

### Prerequisites

- If you're unfamiliar with the `async`/`await` syntax for writing asynchronous code, [read about it](../junk-drawer/ASYNC-AWAIT.md).

👉 Start the app for Exercise 10

In a console window, pointed at the root of this project, run `npm run start-exercise-10`.

This should open a browser window pointed at localhost:3000, showing a web app titled "Exercise 10: Loading Data", and our three adorable kitten friends. If it doesn't, ask your neighbor for assistance or raise your hand.

### The `friends` API

Prior to this exercise, we were using a static list of friends, imported from the file `data/friends.js`. We're going to instead retrieve our data from a simple API based on the contents of `data/db.json`.

The API is already running. To see it in action, you can navigate to an endpoint in your browser.

👉 Browse to the URL `http://localhost:3000/api/friends`.

You should see a JSON response that contains our three friends.

If you change any contents in `data/db.json`, the `friends` endpoint will reflect it. (Though you will have to refresh the page to see the updates.)

### Foundation

In the previous exercise, we used the `useState` hook to store component state. When rendering a component based on data from an API, you'll want to maintain state for the loaded data. You'll see the `useState` hook again in this exercise.

We'll also need to be concerned about multiple possible states, now that we're using an actual API to get our data. When a component initially renders, the state property will be empty. After the API call completes, the state property will not be empty. We will need to address this dichotomy in our components in this exercise.

#### The `useEffect` hook

Another hook, `useEffect`, lets you perform side effects when your component renders. We'll use it to call the API, and set the component's state property with the result of the API call.

Here is an example of a component using an effect hook:

```jsx
import React, { useEffect } from 'react';

function Chat(props) {

  useEffect(() => {
    // This will run whenever the component mounts or `props.friendId` has changed
    socket.emit('join', { id: props.friendId });

    return () => {
      // This will run whenever the component unmounts or `props.friendId` is going to change
      socket.emit('leave', { id: props.friendId });
    }

    // This indicates that the effect should re-run whenever `props.friendId` changes
  }, [ props.friendId ])

  return ( ... )
}
```

The first argument to `useEffect` is a function that should execute when the component mounts, or when props change that require the effect to re-run. In the example above, this function joins a socket based on `props.friendId`.

Not all effects require "cleanup" code - but if they do, this is accomplished by the first argument function returning another anonymous function. This returned function will execute when the component unmounts, or when props change that require the effect to re-run. In our example above, this "cleanup" function will leave a socket based on the friendId.

The second argument to `useEffect` is an array. This array will contain all props which, when their value changes, would require the effect to re-run. In the example above, we pass `[ props.friendId ]` - this means that the effect will re-run whenever the value of the `friendId` prop changes.

In some cases you won't have any reason to re-run an effect - for instance, if the component needs to load data from an API when it mounts, but never again. In this case, you'll usually want to pass an empty array (`[]`) as the second argument.

### A. Loading the Friends data from the API

The first component we'll update to pull from the API is the `FriendsEntry` component, located at `friends/Friends.entry.js`.

#### 1. Import the API client

We've included a function in `friends/get-friends-from-api.js`, which will make the API call to collect all of our friends. It uses the `axios` library to make an HTTP call to the `friends` API endpoint. Our `Friends.entry` component will use this function to load friends.

👉 Import the `getFriendsFromApi` function into `friends/Friends.entry.js`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friendsentry-import-api).

#### 2. Create a state property

👉 Add a state property to `friends/Friends.entry.js` to maintain the list of friends.

See [Exercise 9](../exercise-9/README.md#creating-a-state-property) for a reminder of how to create a state property.

The default value for this state property should be an empty array.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friendsentry-state-property).

#### 3. Point the `<Friends>` component at the state property

The `FriendsEntry` component is still rendering static data directly, rather than using our new state property. Let's change that!

👉 Pass the state property from step 2 above into the `<Friends>` component

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friendsentry-pass-state-property).

Once you make this change, you will see no friends in your web app. (Don't worry, I'm still your friend!)

This is because we haven't hydrated the state property with friends yet.

#### 4. Add an effect hook to load Friends data

👉 Add a `useEffect` hook to `friends/Friends.entry.js` to load static data

See [above](#the-useeffect-hook) for details on how to create a `useEffect` hook.

This effect hook should call `setFriends` (or whatever you named your state modifier) with the static data that comes from the imported `myFriends` data source. We're regressing to using static data, but better positioning ourselves for dynamic data in a future step.

This effect hook does not require any cleanup code to execute. It also does not need to re-run when props change.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friendsentry-useEffect).

#### 5. Get the list of friends from the API

We're finally ready to load friends dynamically.

👉 Update the `useEffect` hook to call the API and update the state property with the result.

You'll be using `async`/`await` keywords.

1. `await` the result of an asynchronous call to the `getFriendsFromApi()` API client
2. call `setFriends()` (or whatever you named your state modifier in step 2) to update the state of the component with the friend data

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friendsentry-call-api).

#### 6. Handle the "loading" state

At this point, you should notice a slight delay when the page loads, before the friends appear. This is because our API takes a bit of time to respond. The blank view you're seeing is what our component renders before the friends have been loaded from the API.

We should give the user an idea that the page is loading during this time. A great place to do this would be in the `Friends.js` component.

👉 Modify the `Friends.js` component to render an appropriately constructed page when an empty array of friends is passed in.

If the `friends` passed in contain more than one item, the `Friends.js` component should continue to render the full `Friends` list.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friends-loading-state).

#### 7. Test it out!

At this point, you should be loading the friends from an API. When the page first loads, you'll see a "Loading" message for about half a second. After that, you should see your friends.

### B. Loading the FriendDetails data from the API

The `FriendDetailEntry` component, located at `friend-detail/FriendDetail.entry.js`, also needs to load data from an API endpoint.

👉 Repeat the activity of loading data from an API for the `FriendDetailEntry` component.

Refer to your code and the notes above as a reminder of how to do this. There are a couple details that make this component different than the first:

- You'll only be loading one friend this time.
- The state property should default to `undefined`, instead of an empty array, since there is only one friend.
- The ID for the current friend will be passed into the `FriendDetailEntry` component via the `match.params.id` prop, thanks to ReactRouter.
- The function that calls the API is in `friend-detail/get-friend-from-api.js`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#frienddetail).

### Test it out

You should now have your friends loading from API endpoints throughout the app.

You can verify this by making a change in `data/db.json`, and making sure the change is reflected in the app. You will need to refresh the app to see the change.

### Extra Credit

- Read more about [the `useEffect` hook](https://overreacted.io/a-complete-guide-to-useeffect/).
