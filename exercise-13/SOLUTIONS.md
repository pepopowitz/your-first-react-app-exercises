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

## Toggle Class Name
```jsx
import classNames from 'classnames';

export default class FriendFlipper extends React.Component {
  ...
  render() {
    return (
      <div
        className={classNames(styles.flipWrapper, {
          [styles.flipped]: this.state.flipped,
        })}
      >
        <div className={styles.flipper}>
          <div className={styles.front}>{this.renderFront()}</div>
          <div className={styles.back}>{this.renderBack()}</div>
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
