import React, { useState, useEffect } from 'react';

import getFriendsFromApi from './get-friends-from-api';

import Friends from './Friends';

export default function FriendsEntry() {
  const [friends, setFriends] = useState([]);

  useEffect(async () => {
    const apiFriends = await getFriendsFromApi();
    setFriends(apiFriends);
  }, []); // Note: removing `, []` causes an infinite render loop!

  return <Friends friends={friends} />;
}
