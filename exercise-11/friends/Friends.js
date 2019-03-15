import React from 'react';

import Page from '../shared/Page';
import FriendProfile from './FriendProfile';

export default function Friends(props) {
  return (
    <Page>
      {props.friends.map(friend => (
        <FriendProfile
          key={friend.id}
          id={friend.id}
          name={friend.name}
          image={friend.image}
        />
      ))}
    </Page>
  );
}
