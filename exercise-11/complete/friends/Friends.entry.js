import React, { useState, useEffect } from 'react';

import getFriendsFromApi from './get-friends-from-api';

import Friends from './Friends';

export default function FriendsEntry() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    async function load() {
      const friends = await getFriendsFromApi();
      setFriends(friends);
    }
    load();
  }, []);

  return <Friends friends={friends} />;
}
