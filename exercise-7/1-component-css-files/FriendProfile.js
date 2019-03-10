import React from 'react';

import Card from './Card';

import './FriendProfile.css';

export default function FriendProfile({ name, image }) {
  return (
    <Card>
      <div className="friend-profile">
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </div>
    </Card>
  );
}
