# Possible Solutions

## FriendProfile to class

```jsx
export default class FriendProfile extends React.Component {
  render() {
    const { id, name, image } = this.props;

    return (
      <Link to={'friends/' + id}>
        <Card>
          <div className={styles.friendProfile}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
          </div>
        </Card>
      </Link>
    );
  }
}
```

## Friends to class

```jsx
export default class Friends extends React.Component {
  render() {
    return <Page>{this.renderFriends()}</Page>;
  }

  renderFriends() {
    const { friends } = this.props;
    if (friends.length === 0) {
      return <h1>Loading...</h1>;
    }

    return friends.map(friend => (
      <FriendProfile
        key={friend.id}
        id={friend.id}
        name={friend.name}
        image={friend.image}
      />
    ));
  }
}
```

## FriendProfile to functional

```jsx
export default function FriendProfile({ id, name, image }) {
  return (
    <Link to={'friends/' + id}>
      <Card>
        <div className={styles.friendProfile}>
          <img src={image} alt={name} />
          <h3>{name}</h3>
        </div>
      </Card>
    </Link>
  );
}
```

## Friends to functional

```jsx
export default function Friends(props) {
  return <Page>{renderFriends(props.friends)}</Page>;
}

function renderFriends(friends) {
  if (friends.length === 0) {
    return <h1>Loading...</h1>;
  }

  return friends.map(friend => (
    <FriendProfile
      key={friend.id}
      id={friend.id}
      name={friend.name}
      image={friend.image}
    />
  ));
}
```
