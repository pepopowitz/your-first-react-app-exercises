import React from 'react';

import FriendDetailFinished from './FriendDetail';
import getFriendFromApi from './get-friend-from-api';

export default class FriendDetailEntry extends React.Component {
  state = {
    friend: undefined,
  };

  async componentDidMount() {
    // the match prop is passed in via react.router
    const friend = await getFriendFromApi(this.props.match.params.id);
    this.setState({
      friend,
    });
  }

  render() {
    return <FriendDetailFinished friend={this.state.friend} />;
  }
}
