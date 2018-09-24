# Exercise 12
## React Router

In this exercise, we're going to use React-Router to build a second page into our app. When we're complete, users will be able to navigate from our friends list to a detailed view of each friend.

&#128073; Start the app for Exercise 12

In a console window, pointed at the root of this project, run `npm run start-exercise-12`.

This should open a browser window pointed at localhost:3000, showing a web app titled "Exercise 12: React Router", and our three adorable kitten friends. If it doesn't, ask your neighbor for assistance or raise your hand.

### Component Reorganization

In this exercise, we've re-architected our file & folder structure. We've created some folders:

* `/data`: this folder holds the data that drives our app. For now, that's our list of friends.
* `/friend-detail`: this folder holds components that render a "friend detail" page. This is a new page we'll be building out in this exercise.
* `/friends`: this folder holds components that render the "friends list" page - the one we've been working with so far.
* `/shared`: this folder contains components that could be shared across multiple other folders.

### Router Setup

To set up React-Router, we've already taken a few steps:

* Installed React-Router as a dependency, by running `npm install --save react-router`
* Wrapped our app in a `<BrowserRouter>` component, in `App.js`
* Defined a route in `App.js` that matches the path `/` exactly, and renders our `<Friends>` container component.

### Add a new `<Route>`

In the folder `/friend-detail`, we've added a couple components that render a very simple Friend Detail page.

&#128073; Add a new `<Route>` to `App.js`, which will render the new Friend Detail page.

You'll want to import the `<FriendDetail>` component from './friend-detail/FriendDetail.container'.

The route should match the path `friends/:id`.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#frienddetail-route).

### Add a link to the new Route

We need a way to navigate to the route we added.

React-Router includes a `<Link>` component for navigating to a router-friendly URL. 

&#128073; Wrap the `<Card>` element in `'/friends/FriendProfile.js` in a `<Link>` element. 

Remember that you'll need to import the `Link` component from `react-router-dom`, and that the `to` prop is where the link will go when it is clicked.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#friendprofile-link).

### Get friend ID from the URL

When you click on one of our kitten friends, you should now navigate to the Friend Detail page!

Unfortunately, regardless of which kitten you click, it always renders the same friend - Turtle.

&#128073; Open `/friend-detail/FriendDetail.container.js`, and see if you can identify why we are always rendering Turtle.

As the comment in the component indicates, we aren't getting the active friend ID in this component.

When we use React-Router, our components automatically get access to a prop named `match`. This `match` prop contains a `params` array, which contains all the parameters passed into the current route.

&#128073; Modify `/friend-detail/FriendDetail.container.js` so that it pulls the active friend ID from the `match` prop.

Use `console.log` to inspect the props passed into the component if you need to.

You'll want to use `friends.find(...)` to find the friend whose id property matches the ID passed in.

One other trick - the `id` parameter in the `match.params` array is a string; the `id` properties in the `friends` array are integers. You might need `parseInt(...)` to convert between the two types.

When you've completed this task, you should be able to navigate to all three kitten friends' detail pages.

If you get stuck, [see a possible solution here](./SOLUTIONS.md#active-friend-id).
