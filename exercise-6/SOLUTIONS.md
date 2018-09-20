# Possible Solutions

## React Components

```jsx
export default class Friends extends React.Component {
  render() {
    return <FriendProfile name={myFriends[0].name} />;
  }
}
```

## Wrapping in a div

```jsx
export default class Friends extends React.Component {
  render() {
    return (
      <div>
        <h1>hello, friends!</h1>
        <FriendProfile name={myFriends[0].name} />
      </div>
    );
  }
}
```

## Wrapping in a fragment

```jsx
export default class Friends extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>hello, friends!</h1>
        <FriendProfile name={myFriends[0].name} />
      </React.Fragment>
    );
  }
}
```

## Arrays

```jsx
export default class Friends extends React.Component {
  render() {
    return myFriends.map(friend => (
      <FriendProfile key={friend.id} name={friend.name} age={friend.age} />
    ));
  }
}
```

## Strings or numbers

```jsx
class FriendProfile extends React.Component {
  render() {
    return this.props.name;
  }
}
```

## null

```jsx
class FriendProfile extends React.Component {
  render() {
    if (this.props.age === undefined) {
      return null;
    }
    return this.props.name;
  }
}
```