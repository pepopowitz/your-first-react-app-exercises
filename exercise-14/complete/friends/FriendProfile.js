import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../shared/Card';

import styles from './FriendProfile.module.css';

export default class FriendProfile extends React.Component {
  render() {
    const { id, name, image } = this.props;

    return (
      <Link to={'friends/' + id}>
        <Card>
          <div className={styles.friendProfile}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
          </div>
        </Card>
      </Link>
    );
  }
}
