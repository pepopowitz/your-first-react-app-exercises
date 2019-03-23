import React from 'react';

import friends from '../data/friends';

import FriendDetail from './FriendDetail';

export default function(props) {
  // the match prop is passed in via react.router
  const friendId = props.match.params.id;
  const friend = friends.find(x => x.id === parseInt(friendId, 10));

  return <FriendDetail friend={friend} />;
}
