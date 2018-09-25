import React from 'react';

import friends from '../data/friends';

import FriendDetail from './FriendDetail';

export default function() {
  //TODO - how do we get the active friend id???
  const friend = friends[2];

  return <FriendDetail friend={friend} />;
}
