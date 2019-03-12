# Possible Solutions

## useState

```jsx
export default function FriendFlipper(props) {
  const [flipped, setFlipped] = useState(false);

  return (
    // ...
  );
}
```

## Conditional Render

```jsx
export default function FriendFlipper(props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={styles.flipWrapper}>
      <div className={styles.flipper}>
        {flipped ? (
          <Back friend={props.friend} />
        ) : (
          <Front friend={props.friend} />
        )}
      </div>
    </div>
  );
}
```



## Pass State Modifier

```jsx
export default function FriendFlipper(props) {
  // ...
        {flipped ? (
          <Back friend={props.friend} setFlipped={setFlipped} />
        ) : (
          <Front friend={props.friend} setFlipped={setFlipped} />
        )}
  // ...
}
```

## Toggle Front To Back

```jsx
function Front(props) {
  const { friend, setFlipped } = props;
  return (
    // ...
        <button
          type="button"
          className={styles.flipperNav}
          onClick={() => setFlipped(true)}
        >
          Details &gt;
        </button>
    // ...
  );
}
```

## Toggle Back To Front

```jsx
function Back(props) {
  const { friend, setFlipped } = props;
  return (
    // ...
        <button
          type="button"
          className={styles.flipperNav}
          onClick={() => setFlipped(false)}
        >
          &lt; Back
        </button>
    // ...
  );
}
```