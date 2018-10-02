# Possible Solutions

## Loading State
```jsx
  it('renders loading if in a loading state', () => {
    const friend = undefined;
    
    const context = render(
      <MemoryRouter>
        <ThemeProvider>
          <FriendDetail friend={friend} />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(context.getByText('Loading...')).not.toBeNull();
  });
```

## Hydrated State
```jsx
  it('renders friend if not in a loading state', () => {
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

    expect(context.getByText('Mr. Smidgens')).not.toBeNull();
    expect(context.getByText('This little guy likes a bowl of milk at bedtime. Scratch his belly and he\'ll be your best friend.')).not.toBeNull();

  });
```
