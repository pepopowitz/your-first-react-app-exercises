# Possible Solutions

## Friends to stateless

```jsx
export default function Friends(props) {
  return myFriends.map(friend => (
    <FriendProfile key={friend.id} name={friend.name} age={friend.age} />
  ));
}
```

## FriendProfile to stateless

```jsx
function FriendProfile(props) {
  return (
    <div className="friend-profile">
      {props.name}
      {props.age ? ` (${props.age})` : null}
    </div>
  );
}
```

## Friends to class

```jsx
export default class Friends extends React.Component {
  render() {
    return myFriends.map(friend => (
      <FriendProfile key={friend.id} name={friend.name} age={friend.age} />
    ));
  }
}
```

## FriendProfile to class

```jsx
class FriendProfile extends React.Component {
  render() {
    return (
      <div className="friend-profile">
        {this.props.name}
        {this.props.age ? ` (${this.props.age})` : null}
      </div>
    );
  }
}
```