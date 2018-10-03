import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import ThemeProvider from '../theme/Provider';

import FriendFlipper from './FriendFlipper';

describe('./friend-detail/FriendFlipper', () => {
  it('defaults to the front side', () => {
    // arrange

    // act

    // assert
  });

  it('flips to the back side after a button click', () => {
    // arrange

    // act

    // assert
  });


  // FINISHED -- don't forget to remove testid's from component!!!
  
  it('defaults to the front side', () => {
    const friend = {
      name: 'Mr. Smidgens',
      colors: ['brown'],
      bio:
        "This little guy likes a bowl of milk at bedtime. Scratch his belly and he'll be your best friend.",
    };

    const context = render(
      <MemoryRouter>
        <ThemeProvider>
          <FriendFlipper friend={friend} />
        </ThemeProvider>
      </MemoryRouter>
    );

    // things from the front side SHOULD be there
    expect(context.queryByTestId('front')).not.toBeNull();

    // things from the back side SHOULD NOT be there
    expect(context.queryByTestId('back')).toBeNull();
  });


  it('flips to the back side after a button click', () => {
    const friend = {
      name: 'Mr. Smidgens',
      colors: ['brown'],
      bio:
        "This little guy likes a bowl of milk at bedtime. Scratch his belly and he'll be your best friend.",
    };

    const context = render(
      <MemoryRouter>
        <ThemeProvider>
          <FriendFlipper friend={friend} />
        </ThemeProvider>
      </MemoryRouter>
    );

    fireEvent.click(context.getByText('Details >'));

    // things from the front side SHOULD NOT be there
    expect(context.queryByTestId('front')).toBeNull();

    // things from the back side SHOULD be there
    expect(context.queryByTestId('back')).not.toBeNull();
  });
});
