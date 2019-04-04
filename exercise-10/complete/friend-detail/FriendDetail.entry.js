import React, { useState, useEffect } from 'react';

import getFriendFromApi from './get-friend-from-api';

import FriendDetail from './FriendDetail';

export default function(props) {
  const [friend, setFriend] = useState(undefined);

  useEffect(() => {
    async function load() {
      const id = props.match.params.id;
      const friend = await getFriendFromApi(id);
      setFriend(friend);
    }
    load();
  }, [props.match.id]);

  return <FriendDetail friend={friend} />;
}
