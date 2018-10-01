import React from 'react';

import friends from '../data/friends';

import FriendDetail from './FriendDetail.finished';

export default function({match}) {
  // the match prop is passed in via react.router
  const friendId = match.params.id;
  const friend = friends.find(x => x.id === parseInt(friendId, 10));

  return <FriendDetail friend={friend} />;
}
