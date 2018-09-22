# Possible Solutions

## FriendProfile PropTypes

```javascript
FriendProfile.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
```

## Friends array

```javascript
Friends.propTypes = {
  friends: PropTypes.array.isRequired,
};
```

## Friends arrayOf shape

```javascript
Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
```

## Removed Property

```javascript
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
    // image is missing!
  },
];
```
