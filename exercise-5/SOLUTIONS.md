# Possible solutions

## Static HTML

```jsx
export default function Friends() {
  return (
    <div>
      <h1>Hello, Friends!</h1>
    </div>
  );
}
```

## Evaluating a variable

```jsx
export default function Friends() {
  return (
    <div>
      <h1>Hello, Friends!</h1>
      <h2>{greeting}</h2>
    </div>
  );
}
```

## Evaluating a function

```jsx
export default function Friends() {
  return (
    <div>
      <h1>Hello, Friends!</h1>
      <h2>{emphasize(greeting)}</h2>
    </div>
  );
}
```

## className

```jsx
export default function Friends() {
  return (
    <div>
      <h1 className="friends-title">Hello, Friends!</h1>
      <h2>{emphasize(greeting)}</h2>
    </div>
  );
}
```

## Evaluating attributes

```jsx
export default function Friends() {
  return (
    <div>
      <h1 className="friends-title">Hello, Friends!</h1>
      <h2 className={determineGreetingClass()}>{emphasize(greeting)}</h2>
    </div>
  );
}
```

## Array.map

```jsx
export default function Friends() {
  return (
    <div>
      <h1 className="friends-title">Hello, Friends!</h1>
      <h2 className={determineGreetingClass()}>{emphasize(greeting)}</h2>
      <ul>
        {myFriends.map(friend => {
          return <li>{friend.name}</li>;
        })}
      </ul>
    </div>
  );
}
```

## Array keys

```jsx
export default function Friends() {
  return (
    <div>
      <h1 className="friends-title">Hello, Friends!</h1>
      <h2 className={determineGreetingClass()}>{emphasize(greeting)}</h2>
      <ul>
        {myFriends.map(friend => {
          return <li key={friend.id}>{friend.name}</li>;
        })}
      </ul>
    </div>
  );
}
```

## Conditional rendering

```jsx
export default function Friends() {
  return (
    <div>
      <h1 className="friends-title">Hello, Friends!</h1>
      <h2 className={determineGreetingClass()}>{emphasize(greeting)}</h2>
      <ul>
        {myFriends.map(friend => {
          return (
            <li key={friend.id}>
              {friend.name}
              {friend.age ? ` (${friend.age})` : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
```
