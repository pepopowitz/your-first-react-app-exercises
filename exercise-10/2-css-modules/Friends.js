import React from 'react';

import Page from './Page';
import FriendProfile from './FriendProfile';

export default function Friends({ friends }) {
  return (
    <Page>
      {friends.map(friend => (
        <FriendProfile
          key={friend.id}
          name={friend.name}
          image={friend.image}
        />
      ))}
    </Page>
  );
}