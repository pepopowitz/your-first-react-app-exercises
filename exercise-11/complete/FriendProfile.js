import React from 'react';

import Card from './Card';

import styles from './FriendProfile.css'

export default function FriendProfile({ name, image }) {
  return (
    <Card>
      <div className={styles.friendProfile}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </div>
    </Card>
  );
}
