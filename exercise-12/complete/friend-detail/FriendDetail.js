import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../shared/Page';
import Card from '../shared/Card';

import styles from './FriendDetail.module.css';

export default function({ friend }) {
  return (
    <Page>
      <div className={styles.friendDetail}>
        <div className={styles.toolbar}>
          <Link to="/">&lt; Home</Link>
        </div>
        <Card>
          <h1>{friend.name}</h1>
          <h2>ID: {friend.id}</h2>
          <img src={friend.image} />
          <p>{friend.bio}</p>
        </Card>
      </div>
    </Page>
  );
}
