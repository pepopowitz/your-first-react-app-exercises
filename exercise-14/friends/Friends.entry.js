import React from 'react';

import myFriends from '../data/friends';

import Friends from './Friends';

export default function FriendsEntry() {
  return <Friends friends={myFriends} />
}

