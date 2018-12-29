import React from 'react';

import FriendFlipperBack from './FriendFlipperBack';
import FriendFlipperFront from './FriendFlipperFront';

import styles from './FriendFlipper.module.css';

export default class FriendFlipper extends React.Component {
  state = {
    flipped: false,
  };

  handleFlipped = () => {
    this.setState(prevProps => {
      return {
        flipped: !prevProps.flipped,
      };
    });
  };

  render() {
    return (
      <div className={styles.flipWrapper}>
        <div className={styles.flipper}>
          {this.state.flipped ? (
            <FriendFlipperBack
              friend={this.props.friend}
              toggleFlipped={this.handleFlipped}
            />
          ) : (
            <FriendFlipperFront
              friend={this.props.friend}
              toggleFlipped={this.handleFlipped}
            />
          )}
        </div>
      </div>
    );
  }
}
