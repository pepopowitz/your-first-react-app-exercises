import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../shared/Page';
import Card from '../shared/Card';
import FriendFlipper from './FriendFlipper';

import styles from './FriendDetail.module.css';

export default function({ friend }) {
  return (
    <Page>
      <div className={styles.friendDetail}>
        <div className={styles.toolbar}>
          <Link to="/">&lt; Home</Link>
        </div>
        <Card>
          <div className={styles.cardContents}>
            <h1>{friend.name}</h1>
            <FriendFlipper friend={friend} />
            <p>{friend.bio}</p>
          </div>
        </Card>
      </div>
    </Page>
  );
}
