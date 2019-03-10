# Possible Solutions

## Initialization
```jsx
export default class FriendFlipper extends React.Component {
  state = {
    flipped: false,
  };

  ...
}
```

## Event Handler
```jsx
export default class FriendFlipper extends React.Component {
  ...

  handleFlipped = () => {
    this.setState(prevProps => {
      return {
        flipped: !prevProps.flipped,
      };
    });
  };

  ...
}
```

## Conditional Render
```jsx
export default class FriendFlipper extends React.Component {
  ...
  render() {
    return (
      <div className={styles.flipWrapper}>
        <div className={styles.flipper}>
          {this.state.flipped ? null : this.renderFront()}
          {!this.state.flipped ? null : this.renderBack()}
        </div>
      </div>
    );
  }
  ...
}
```

## Connect Buttons To Handler
```jsx
  <button
    type="button"
    className={styles.flipperNav}
    onClick={this.handleFlipped}
  >
```
