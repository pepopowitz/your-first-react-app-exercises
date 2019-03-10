import React, { useState } from 'react';

import FriendFlipperFront from './FriendFlipperFront';
import FriendFlipperBack from './FriendFlipperBack';

import styles from './FriendFlipper.module.css';

export default function FriendFlipper({ friend }) {
  const [flipped, setFlipped] = useState(false);

  const toggleFlipped = () => setFlipped(!flipped);

  return (
    <div className={styles.flipWrapper}>
      <div className={styles.flipper}>
        {flipped ? (
          <FriendFlipperBack friend={friend} toggleFlipped={toggleFlipped} />
        ) : (
          <FriendFlipperFront friend={friend} toggleFlipped={toggleFlipped} />
        )}
      </div>
    </div>
  );
}
