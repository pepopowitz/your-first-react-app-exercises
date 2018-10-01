import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import ThemeProvider from '../theme/Provider';

import FriendDetail from './FriendDetail';

describe('./friend-detail/FriendDetail', () => {
  // Write your tests here!

  // FINISHED -

  it('renders loading if in a loading state', () => {
    const friend = undefined;
    
    const { getByText } = render(
      <MemoryRouter>
        <ThemeProvider>
          <FriendDetail friend={friend} />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(getByText('Loading...')).not.toBeNull();
  });

  it('renders friend if not in a loading state', () => {
    const friend = {
      name: 'Mr. Smidgens',
      colors: ['brown'],
      bio:
        "This little guy likes a bowl of milk at bedtime. Scratch his belly and he'll be your best friend.",
    };

    const { getByText } = render(
      <MemoryRouter>
        <ThemeProvider>
          <FriendDetail friend={friend} />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(getByText('Mr. Smidgens')).not.toBeNull();
    expect(getByText('This little guy likes a bowl of milk at bedtime. Scratch his belly and he\'ll be your best friend.')).not.toBeNull();

  });
});
