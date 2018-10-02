# Possible Solutions

## Friends: Import API
```js
import getFriendsFromApi from './get-friends-from-api';
```

## Friends: Stateful
```jsx
export default class FriendsEntry extends React.Component {
  render() {
    return <Friends friends={myFriends} />
  }
}
```

## Friends: Initialize

```jsx
export default class FriendsEntry extends React.Component {
  state = {
    friends: []
  }

  // ...
}
```

## Friends: render
```jsx
export default class FriendsEntry extends React.Component {
  // ...
  
  render() {
    return <Friends friends={this.state.friends} />;
  }
}
```

## Friends: componentDidMount
```jsx
export default class FriendsEntry extends React.Component {
  // ...

  async componentDidMount() {
    const friends = await getFriendsFromApi();
    this.setState({
      friends
    });
  }
}
```

## FriendDetail: Handle empty friend
```jsx
export default function({ friend }) {
  return (
    <Page>
      <div className={styles.friendDetail}>
        <div className={styles.toolbar}>
          <Link to="/">&lt; Home</Link>
        </div>
        <Card>{renderFriend(friend)}</Card>
      </div>
    </Page>
  );
}

function renderFriend(friend) {
  if (friend === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.cardContents}>
      <h1>{friend.name}</h1>
      <FriendFlipper friend={friend} />
      <p>{friend.bio}</p>
    </div>
  );
}
```

## FriendDetailEntry
```jsx
export default class FriendDetailEntry extends React.Component {
  state = {
    friend: undefined,
  };

  render() {
    return <FriendDetailFinished friend={this.state.friend} />;
  }

  async componentDidMount() {
    // the match prop is passed in via react.router
    const friend = await getFriendFromApi(this.props.match.params.id);
    this.setState({
      friend,
    });
  }
}
```
