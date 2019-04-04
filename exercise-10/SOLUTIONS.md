# Possible Solutions

## FriendsEntry: Import API

```js
import getFriendsFromApi from './get-friends-from-api';
```

## FriendsEntry: State Property

```jsx
import React, { useState } from 'react';

// ...

export default function FriendsEntry() {
  const [friends, setFriends] = useState([]);

  return <Friends friends={myFriends} />;
}
```

## FriendsEntry: Pass State Property

```jsx
export default function FriendsEntry() {
  const [friends, setFriends] = useState([]);

  return <Friends friends={friends} />;
}
```

## FriendsEntry: useEffect

```jsx
import React, { useState, useEffect } from 'react';

// ...

export default function FriendsEntry() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    setFriends(myFriends);
  });

  return <Friends friends={friends} />;
}
```

## FriendsEntry: Call API

```jsx
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
```

## Friends: Loading State

```jsx
export default function Friends(props) {
  return <Page>{renderFriends(props.friends)}</Page>;
}

function renderFriends(friends) {
  if (friends.length === 0) {
    return <h1>Loading...</h1>;
  }

  return friends.map(friend => (
    <FriendProfile
      key={friend.id}
      id={friend.id}
      name={friend.name}
      image={friend.image}
    />
  ));
}
```

## FriendDetail

### FriendDetail.entry.js

```jsx
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
```

## FriendDetail.js

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../shared/Page';
import Card from '../shared/Card';
import FriendFlipper from './FriendFlipper';

import styles from './FriendDetail.module.css';

export default function({ friend }) {
  return (
    <Page>
      <div className={styles.friendDetail}>
        <div className={styles.toolbar}>
          <Link to="/">&lt; Home</Link>
        </div>
        <Card>{renderFriend(friend)}</Card>
      </div>
    </Page>
  );
}

function renderFriend(friend) {
  if (friend === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.cardContents}>
      <h1>{friend.name}</h1>
      <FriendFlipper friend={friend} />
      <p>{friend.bio}</p>
    </div>
  );
}
```
