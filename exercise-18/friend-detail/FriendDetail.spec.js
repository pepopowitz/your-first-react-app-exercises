import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import ThemeProvider from '../theme/Provider';

import FriendDetail from './FriendDetail';

describe('./friend-detail/FriendDetail', () => {
  it('renders loading if friend isn`t loaded yet', () => {
    const friend = undefined;
    
    const context = render(
      <MemoryRouter>
        <ThemeProvider>
          <FriendDetail friend={friend} />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(context.queryByText('Loading...')).not.toBeNull();
  });

  it('renders a friend if friend is loaded', () => {
    const friend = {
      name: 'Mr. Smidgens',
      colors: ['brown'],
      bio:
        "This little guy likes a bowl of milk at bedtime. Scratch his belly and he'll be your best friend.",
    };

    const context = render(
      <MemoryRouter>
        <ThemeProvider>
          <FriendDetail friend={friend} />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(context.queryByText('Mr. Smidgens')).not.toBeNull();
    expect(context.queryByText('This little guy likes a bowl of milk at bedtime. Scratch his belly and he\'ll be your best friend.')).not.toBeNull();

  });

});
