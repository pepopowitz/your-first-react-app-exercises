import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import FriendDetail from './FriendDetail';

import ThemeProvider from '../theme/Provider';

describe('./friend-detail/FriendDetail', () => {
  // Write your tests here!

  // FINISHED -

  it('renders loading if in a loading state', () => {
    const friend = undefined;

    const wrapper = shallow(<FriendDetail friend={friend} />);

    expect(wrapper.containsMatchingElement(<h1>Loading...</h1>)).toEqual(true);
  });

  it('renders friend if not in a loading state', () => {
    const friend = {
      name: 'Mr. Smidgens',
      bio:
        "This little guy likes a bowl of milk at bedtime. Scratch his belly and he'll be your best friend.",
    };

    const wrapper = shallow(<FriendDetail friend={friend} />);

    expect(wrapper.containsMatchingElement(<h1>Mr. Smidgens</h1>)).toEqual(
      true
    );
    expect(
      wrapper.containsMatchingElement(
        <p>
          This little guy likes a bowl of milk at bedtime. Scratch his belly and
          he'll be your best friend.
        </p>
      )
    ).toEqual(true);
  });

  it('renders friend if not in a loading state', () => {
    const friend = {
      name: 'Mr. Smidgens',
      colors: ['brown'],
      bio:
        "This little guy likes a bowl of milk at bedtime. Scratch his belly and he'll be your best friend.",
    };

    const wrapper = mount(
      <MemoryRouter>
        <ThemeProvider>
          <FriendDetail friend={friend} />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(wrapper.containsMatchingElement(<h1>Mr. Smidgens</h1>)).toEqual(
      true
    );
    expect(
      wrapper.containsMatchingElement(
        <p>
          This little guy likes a bowl of milk at bedtime. Scratch his belly and
          he'll be your best friend.
        </p>
      )
    ).toEqual(true);
  });
});
