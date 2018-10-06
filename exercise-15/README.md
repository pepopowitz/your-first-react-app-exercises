# Exercise 15
## Loading Data

This exercise introduces you to the usual method of loading data from an API in a React component.

👉 Start the app for Exercise 15

In a console window, pointed at the root of this project, run `npm run start-exercise-15`.

This should open a browser window pointed at localhost:3000, showing a web app titled "Exercise 15: Loading Data", and our three adorable kitten friends. If it doesn't, ask your neighbor for assistance or raise your hand.

### The `friends` API

Prior to this exercise, we were using a static list of friends, imported from the file `data/friends.js`. We're going to instead retrieve our data from a simple API based on the contents of `data/db.json`.

The API is already running. To see it in action, you can navigate to an endpoint in your browser.

👉 Browse to the URL `http://localhost:3000/api/friends`. 

You should see a JSON response that contains our three friends.

If you change any contents in `data/db.json`, the `friends` endpoint will reflect it. (Though you will have to refresh the page to see the updates.)

### Lifecycle Events

Several lifecycle events are involved when loading data from an API: initialization, `render`, and `componentDidMount`.

#### Initialization

The state to be loaded from an API is initialized to an empty value.

For a refresher on how to initialize state, see [exercise 13](../exercise-13/README.md#initializing-state).

#### `render`

The state data is rendered in the `render` function of a component. When the component initially loads, it renders with an empty value (`undefined`, or `null`, or an empty array, or whatever you choose).

After the data is completed loading from the API, the component renders with the updated state.

#### componentDidMount

The `componentDidMount` lifecycle event fires right after a React component is added to the DOM. From within `componentDidMount`, we'll call the API endpoint.

When the API call is complete, we can use `setState()` to update the state with the loaded data.

Recall that to easily handle asynchronous processing in a component lifecycle event, you can simply mark the method with `async`, and call `await` within it.

#### An example

Following is a simple example of how the lifecycle events work together to load data into a component.

```jsx
export default class MyComponent extends React.Component {
  // Initialization
  state = {
    items: []
  }

  // Render the state
  render() {
    return <ItemList items={this.state.items} />;
  }

  // Load the state from an API
  async componentDidMount() {
    const items = await loadItemsFromApi();
    this.setState({
      items
    });
  }
}
```

### Loading the FriendsEntry data from the API

The first component we'll update to pull from the API is the `FriendsEntry` component, located at `friends/Friends.entry.js`.

#### get-friends-from-api.js

We've included a function in `friends/get-friends-from-api.js`, which will make the API call to collect all of our friends. It uses the `axios` library to make an HTTP call to the `friends` API endpoint.

👉 Import the `getFriendsFromApi` function into `friends/Friends.entry.js`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friends-import-api).

Before we can use our lifecycle events to connect to the API endpoint, we'll need to convert our component to a stateful one.

👉 Convert the `FriendsEntry` component from a stateless functional component to a stateful class syntax component.

For a reminder on how to do this, see [exercise 7](../exercise-7/README.md#the-process).

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friends-stateful).

#### Initialize the state

Our component renders a list of friends. We'll want to initialize our component state so that it contains an empty friends array.

👉 Initialize the state of the `FriendsEntry` component so that it contains an empty array named `friends`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friends-initialize).

#### Render the `friends` data from local state

👉 Modify the `render()` function of the `FriendsEntry` component so that it renders the friends from `this.state.friends`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friends-render).

#### Call the `friends` API to get data

The final step for connecting the `FriendsEntry` component to an API is to load the data from within `componentDidMount()`.

👉 Add a `componentDidMount()` method that (a) calls the API to get friend data, then (b) calls `setState()` to update the state of the component with the friend data.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friends-componentdidmount).

### Loading FriendDetailEntry data from the API

The `FriendDetailEntry` component, at `friend-detail/FriendDetail.entry.js`, also needs to load data from an API endpoint.

#### Handling an empty friend

In the previous activity, the `FriendsEntry` component worked with an empty array for the default state. In this activity, the `FriendDetailEntry` component will need to account for an `undefined` friend. This situation can happen when the component is still loading data from the API, and if our component can't handle an `undefined` friend, it will err out.

A great place to handle this dichotomy is within the `FriendDetail` component, in `friends/FriendDetail.js`.

👉 Modify the `FriendDetail` component to render an appropriately constructed page when an undefined `friend` is passed in.

If an actual `friend` is passed in, it should continue to render the full `FriendDetail` information.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#frienddetail-handle-empty-friend).

👉 Repeat the activity of loading data from an API for the `FriendDetailEntry` component. 

Refer to the notes above as a reminder of how to do this. There are a couple details that make this component different than the first:

* You'll only be loading one friend this time.
* It should default to `undefined`, instead of an empty array.
* The ID for the current friend will be passed into the `FriendDetailEntry` component via the `match.params.id` prop, thanks to ReactRouter.
* The function that calls the API is in `friend-detail/get-friend-from-api.js`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#frienddetailentry).

### Test it out

You should now have your friends loading from API endpoints throughout the app.

You can verify this by making a change in `data/db.json`, and making sure the change is reflected in the app. You will need to refresh the app to see the change.

### Extra Credit

* Show a "loading" indicator when the friends array has not yet loaded on the Friends list page.

* Read more about [state & lifecycle events](https://reactjs.org/docs/state-and-lifecycle.html).

* Read about another use of React lifecycle events - [integrating with non-React libraries](https://reactjs.org/docs/integrating-with-other-libraries.html).