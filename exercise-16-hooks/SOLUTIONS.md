TODO - fill these in!

# Possible Solutions

## FriendFlipper: `useState`

```jsx
import React, { useState } from 'react';

import FriendFlipperFront from './FriendFlipperFront';
import FriendFlipperBack from './FriendFlipperBack';

import styles from './FriendFlipper.css';

export default function FriendFlipper({ friend }) {
  const [flipped, setFlipped] = useState(false);

  const toggleFlipped = () => setFlipped(!flipped);

  return (
    <div className={styles.flipWrapper}>
      <div className={styles.flipper}>
        {flipped ? (
          <FriendFlipperBack friend={friend} toggleFlipped={toggleFlipped} />
        ) : (
          <FriendFlipperFront friend={friend} toggleFlipped={toggleFlipped} />
        )}
      </div>
    </div>
  );
}
```

## Friends.entry: `useEffect`

```jsx
import React, { useState, useEffect } from 'react';

import getFriendsFromApi from './get-friends-from-api';

import Friends from './Friends';

export default function FriendsEntry() {
  const [friends, setFriends] = useState([]);

  useEffect(async () => {
    const apiFriends = await getFriendsFromApi();
    setFriends(apiFriends);
  }, []);

  return <Friends friends={friends} />;
}
```

## Switcher: `useContext`

```jsx
import React, { useContext } from 'react';

import ThemeContext from './context';

import styles from './Switcher.css';

export default function() {
  const { onThemeChanged } = useContext(ThemeContext);

  return (
    <button className={styles.switcher} onClick={onThemeChanged}>
      Change Theme
    </button>
  );
}
```
