import React, { useState } from 'react';

import styles from './FriendFlipper.module.css';

export default function FriendFlipper(props) {
  return (
    <div className={styles.flipWrapper}>
      <div className={styles.flipper}>
        <Front friend={props.friend} />
      </div>
    </div>
  );
}

function Front(props) {
  const { friend } = props;
  return (
    <div className={styles.front}>
      <div className={styles.frontContents}>
        <img src={friend.image} alt={friend.name} />
        <button type="button" className={styles.flipperNav}>
          Details &gt;
        </button>
      </div>
    </div>
  );
}

function Back(props) {
  const { friend } = props;
  return (
    <div className={styles.back}>
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
        <button type="button" className={styles.flipperNav}>
          &lt; Back
        </button>
      </div>
    </div>
  );
}
