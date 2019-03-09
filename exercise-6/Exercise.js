import React from 'react';

export default function Friends() {
  return <div />;
}

function FriendProfile(props) {
  return (
    <div className="friend-profile">
      {props.name}
      {props.age ? ` (${props.age})` : null}
    </div>
  );
}

const myFriends = [
  {
    id: 1,
    name: 'Potatoes',
    age: '4 months',
  },
  {
    id: 2,
    name: 'Flower',
    age: '6 months',
  },
  {
    id: 3,
    name: 'Turtle',
  },
];
