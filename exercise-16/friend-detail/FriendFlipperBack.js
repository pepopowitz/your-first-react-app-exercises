import React from 'react';
import classNames from 'classnames';
import ThemeContext from '../theme/context';

import styles from './FriendFlipper.module.css';

export default function FriendFlipperBack({ friend, toggleFlipped }) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className={styles.back}>
          <div className={classNames(styles.backContents, styles[theme])}>
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
              className={classNames(styles.flipperNav, styles[theme])}
              onClick={toggleFlipped}
            >
              &lt; Back
            </button>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}
