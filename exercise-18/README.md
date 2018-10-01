# Exercise 18
## Testing Component Interactions

In this exercise, we're going to write tests to verify that the `FriendFlipper` component is functioning properly with user interaction.

### `FriendFlipper` Functionality

We built the `FriendFlipper` a few exercises ago. Recall that it has a front and a back, and when the buttons are clicked on either side, a CSS style (`.flipped`) is either added or removed. The flipping animation is handled by CSS transitions, prompted by the adding/removal of the `.flipped` style.

We want to write tests that verify that (1) the `.flipped` style is not present when the component initially renders, and (2) the `.flipped` style is present when the button on the front is clicked.

#### Note: Presence of CSS styles is not always encouraged

In our case, the CSS style is the only way we can tell that 



add data-testid="front" and "back" to friendFlipper