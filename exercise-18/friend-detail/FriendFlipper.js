import React from 'react';
import classNames from 'classnames';
import ThemeContext from '../theme/context';

import styles from './FriendFlipper.css';

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
          {this.state.flipped ? null : this.renderFront()}
          {!this.state.flipped ? null : this.renderBack()}
        </div>
      </div>
    );
  }

  renderFront() {
    const { friend } = this.props;
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div className={styles.front}>
            <div className={styles.frontContents} data-testid="front">
              <img src={friend.image} alt={friend.image} />
              <button
                type="button"
                className={classNames(styles.flipperNav, styles[theme])}
                onClick={this.handleFlipped}
              >
                Details &gt;
              </button>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }

  renderBack() {
    const { friend } = this.props;
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div className={styles.back}>
            <div
              className={classNames(styles.backContents, styles[theme])}
              data-testid="back"
            >
              <img src={friend.image} alt={friend.image} />
              <div className={styles.backDetails}>
                <h3>
                  ID:
                  {friend.id}
                </h3>
                <h3>Colors:</h3>
                <ul>
                  {friend.colors.map(color => (
                    <li key={color}>{color}</li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className={classNames(styles.flipperNav, styles[theme])}
                onClick={this.handleFlipped}
              >
                &lt; Back
              </button>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
