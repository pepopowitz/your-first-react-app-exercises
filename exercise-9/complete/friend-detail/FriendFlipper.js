import React, { useState } from 'react';

import styles from './FriendFlipper.module.css';

export default function FriendFlipper(props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={styles.flipWrapper}>
      <div className={styles.flipper}>
        {flipped ? (
          <Back friend={props.friend} setFlipped={setFlipped} />
        ) : (
          <Front friend={props.friend} setFlipped={setFlipped} />
        )}
      </div>
    </div>
  );
}

function Front(props) {
  const { friend, setFlipped } = props;
  return (
    <div className={styles.front}>
      <div className={styles.frontContents}>
        <img src={friend.image} alt={friend.name} />
        <button
          type="button"
          className={styles.flipperNav}
          onClick={() => setFlipped(true)}
        >
          Details &gt;
        </button>
      </div>
    </div>
  );
}

function Back(props) {
  const { friend, setFlipped } = props;
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
        <button
          type="button"
          className={styles.flipperNav}
          onClick={() => setFlipped(false)}
        >
          &lt; Back
        </button>
      </div>
    </div>
  );
}
