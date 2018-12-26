import React, { useContext } from 'react';
import classNames from 'classnames';
import ThemeContext from '../theme/context';

import styles from './FriendFlipper.css';

export default function FriendFlipperFront({ friend, toggleFlipped }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.front}>
      <div className={styles.frontContents}>
        <img src={friend.image} alt={friend.image} />
        <button
          type="button"
          className={classNames(styles.flipperNav, styles[theme])}
          onClick={toggleFlipped}
        >
          Details &gt;
        </button>
      </div>
    </div>
  );
}
