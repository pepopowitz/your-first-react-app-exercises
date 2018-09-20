import React from 'react';

export default class Friends extends React.Component {
  render() {
    return <div />;
  }
}

class FriendProfile extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.age ? ` (${this.props.age})` : null}
      </div>
    );
  }
}

const myFriends = [
  {
    id: 1,
    name: 'Potatoes',
    age: '4 months'
  },
  {
    id: 2,
    name: 'Flower',
    age: '6 months'
  },
  {
    id: 3,
    name: 'Turtle'
  }
];

