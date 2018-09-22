import React from 'react';

import PropTypes from 'prop-types';

export default function Exercise() {
  return <Friends friends={myFriends} />;
}

function Friends({ friends }) {
  return (
    <Page>
      {friends.map(friend => (
        <FriendProfile
          key={friend.id}
          name={friend.name}
          image={friend.image}
        />
      ))}
    </Page>
  );
}
Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function Page({ children }) {
  return (
    <div className="page">
      <div className="content">{children}</div>
    </div>
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function FriendProfile({ name, image }) {
  return (
    <Card>
      <div className="friend-profile">
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </div>
    </Card>
  );
}
FriendProfile.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

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
