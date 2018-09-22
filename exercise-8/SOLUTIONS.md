# Possible Solutions

## Page

```jsx
function Page({ children }) {
  return (
    <div className="page">
      <div className="content">{children}</div>
    </div>
  );
}
```

## Friends With Page

```jsx
export default function Friends({friends}) {
  return (
    <Page>
      {friends.map(friend => (
        <FriendProfile
          key={friend.id}
          name={friend.name}
          image={friend.image}
        />
      ))}
    </Page>
  );
}
```

## Card

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

## FriendProfile With Card

```jsx
function FriendProfile({ name, image }) {
  return (
    <Card>
      <div className="friend-profile">
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </div>
    </Card>
  );
}
```
