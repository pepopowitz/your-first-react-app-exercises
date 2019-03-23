import React from 'react';

import Page from '../shared/Page';
import FriendProfile from './FriendProfile';

export default class Friends extends React.Component {
  render() {
    return <Page>{this.renderFriends()}</Page>;
  }

  renderFriends() {
    const { friends } = this.props;
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
}
