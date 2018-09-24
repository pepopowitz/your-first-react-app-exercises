import React from 'react';
import Page from '../shared/Page';
import Card from '../shared/Card';

import styles from './FriendDetail.css';

export default function({ friend }) {
  return (
    <Page>
      <div className={styles.friendDetail}>
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
