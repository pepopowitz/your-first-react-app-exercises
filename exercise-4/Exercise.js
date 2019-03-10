import React from 'react';

const greeting = 'How are you?';

function emphasize(text) {
  return `${text}!!!!!`;
}

function determineGreetingClass() {
  if (new Date() % 2 === 1) {
    return 'friends-greeting-orange';
  }
  return 'friends-greeting-purple';
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

export default function Friends() {
  return <div />;
}
