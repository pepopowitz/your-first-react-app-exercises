import React from 'react';
import classNames from 'classnames';

import ThemeContext from '../theme/context';

import styles from './Card.css';

export default function Card({ children }) {
  return (
    <ThemeContext.Consumer>
      {({theme}) => (
        <div className={classNames(styles.card, styles[theme])}>{children}</div>
      )}
    </ThemeContext.Consumer>
  );
}
