import React, { useState, useEffect } from 'react';

import FriendDetail from './FriendDetail';
import getFriendFromApi from './get-friend-from-api';

export default function FriendDetailEntry({ match }) {
  const [friend, setFriend] = useState({});

  useEffect(async () => {
    const friend = await getFriendFromApi(match.params.id);
    setFriend(friend);
  }, match.params.id); // Note: removing `, match.params.id` causes an infinite render loop!

  return <FriendDetail friend={friend} />;
}
