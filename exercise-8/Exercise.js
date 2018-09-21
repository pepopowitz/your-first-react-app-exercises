import React from 'react';

export default function Friends() {
  return myFriends.map(friend => (
    <FriendProfile key={friend.id} name={friend.name} image={friend.image} />
  ));
}


function FriendProfile({name, image}) {
  return (
    <div className="friend-profile">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

const myFriends = [
  {
    id: 1,
    name: 'Potatoes',
    image: 'http://placekitten.com/150/150?image=1',
  },
  {
    id: 2,
    name: 'Flower',
    image: 'http://placekitten.com/150/150?image=12',
  },
  {
    id: 3,
    name: 'Turtle',
    image: 'http://placekitten.com/150/150?image=15',
  },
];
