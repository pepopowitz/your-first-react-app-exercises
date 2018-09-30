import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import ThemeProvider from '../theme/Provider';

import FriendFlipper from './FriendFlipper';

import styles from './FriendFlipper.css';

describe('./friend-detail/FriendFlipper', () => {
  it('defaults to the front side', () => {
    const friend = {
      name: 'Mr. Smidgens',
      colors: ['brown'],
      bio:
        "This little guy likes a bowl of milk at bedtime. Scratch his belly and he'll be your best friend.",
    };

    const wrapper = mount(
      <MemoryRouter>
        <ThemeProvider>
          <FriendFlipper friend={friend} />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(wrapper.find('.' + styles.flipped).length).toEqual(0);
  });

  it('defaults to the front side', () => {
    const friend = {
      name: 'Mr. Smidgens',
      colors: ['brown'],
      bio:
        "This little guy likes a bowl of milk at bedtime. Scratch his belly and he'll be your best friend.",
    };

    const wrapper = shallow(
      <FriendFlipper friend={friend} />
    );

    expect(wrapper.find('.' + styles.flipped).length).toEqual(0);
  });

  it('flips to the back side after a button click', () => {
    const friend = {
      name: 'Mr. Smidgens',
      colors: ['brown'],
      bio:
        "This little guy likes a bowl of milk at bedtime. Scratch his belly and he'll be your best friend.",
    };

    const wrapper = mount(
      <MemoryRouter>
        <ThemeProvider>
          <FriendFlipper friend={friend} />
        </ThemeProvider>
      </MemoryRouter>
    );

    const button = wrapper.find('button').first();

    button.simulate('click');

    expect(wrapper.find('.' + styles.flipped).length).toEqual(1);
  });
});
