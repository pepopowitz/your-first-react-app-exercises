import React from 'react';

import styles from './FriendFlipper.css';

export default class FriendFlipper extends React.Component {
  render() {
    return (
      <div className={styles.flipWrapper}>
        <div className={styles.flipper}>
          <div className={styles.front}>{this.renderFront()}</div>
          <div className={styles.back}>{this.renderBack()}</div>
        </div>
      </div>
    );
  }

  renderFront() {
    const { friend } = this.props;
    return (
      <div className={styles.frontContents}>
        <img src={friend.image} alt={friend.name} />
        <button
          type="button"
          className={styles.flipperNav}
        >
          Details &gt;
        </button>
      </div>
    );
  }

  renderBack() {
    const { friend } = this.props;
    return (
      <div className={styles.backContents}>
        <img src={friend.image} alt={friend.image} />
        <div className={styles.backDetails}>
          <h3>
            ID:
            {friend.id}
          </h3>
          <h3>Colors:</h3>
          <ul>
            {friend.colors.map(color => (
              <li key={color}>{color}</li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className={styles.flipperNav}
        >
          &lt; Back
        </button>
      </div>
    );
  }
}
