# Possible Solutions

## React Components

```jsx
export default function Friends() {
  return <FriendProfile name={myFriends[0].name} />;
}
```

## Wrapping in a div

```jsx
export default function Friends() {
  return (
    <div>
      <h1>hello, friends!</h1>
      <FriendProfile name={myFriends[0].name} />
    </div>
  );
}
```

## Wrapping in a fragment

```jsx
export default function Friends() {
  return (
    <React.Fragment>
      <h1>hello, friends!</h1>
      <FriendProfile name={myFriends[0].name} />
    </React.Fragment>
  );
}
```

## Arrays

```jsx
export default function Friends() {
  return myFriends.map(friend => (
    <FriendProfile key={friend.id} name={friend.name} age={friend.age} />
  ));
}
```

## Strings or numbers

```jsx
function FriendProfile(props) {
  return props.name;
}
```

## null

```jsx
function FriendProfile(props) {
  if (props.age === undefined) {
    return null;
  }
  return props.name;
}
```
