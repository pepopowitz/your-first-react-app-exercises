import React from 'react';

export default function Friends() {
  return myFriends.map(friend => (
    <FriendProfile key={friend.id} name={friend.name} age={friend.age} />
  ));
}

function FriendProfile(props) {
  if (props.age === undefined) {
    return null;
  }
  return props.name;
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
