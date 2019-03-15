import React, { useState, useEffect } from 'react';

import getFriendsFromApi from './get-friends-from-api';

import Friends from './Friends';

export default function FriendsEntry() {
  const [friends, setFriends] = useState([]);

  useEffect(async () => {
    const friends = await getFriendsFromApi();
    setFriends(friends);
  }, []);

  return <Friends friends={friends} />;
}
