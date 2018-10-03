# Possible Solutions

## Loading: Arrange
```jsx
  it('renders loading if in a loading state', () => {
    // arrange
    const friend = undefined;

    // ...
  });
```

## Loading: Act
```jsx
  it('renders loading if in a loading state', () => {
    // ...
    
    // act
    const context = render(
      <MemoryRouter>
        <ThemeProvider>
          <FriendDetail friend={friend} />
        </ThemeProvider>
      </MemoryRouter>
    );

    // ...
  });
```

## Loading: Assert

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

## Loading: Complete Test
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


## Hydrated: Arrange

```jsx
  it('renders a friend if friend is loaded', () => {
    const friend = {
      name: 'Mr. Smidgens',
      colors: ['brown'],
      bio:
        "This little guy likes a bowl of milk at bedtime. Scratch his belly and he'll be your best friend.",
    };

    // ...
  });
```

## Hydrated: Act

```jsx
  it('renders a friend if friend is loaded', () => {
    // ...

    const context = render(
      <MemoryRouter>
        <ThemeProvider>
          <FriendDetail friend={friend} />
        </ThemeProvider>
      </MemoryRouter>
    );

    // ...
  });
```

## Hydrated: Assert

```jsx
  it('renders a friend if friend is loaded', () => {
    // ...

    expect(context.getByText('Mr. Smidgens')).not.toBeNull();
    expect(context.getByText('This little guy likes a bowl of milk at bedtime. Scratch his belly and he\'ll be your best friend.')).not.toBeNull();

  });
```

## Hydrated: Complete Test
```jsx
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

    expect(context.getByText('Mr. Smidgens')).not.toBeNull();
    expect(context.getByText('This little guy likes a bowl of milk at bedtime. Scratch his belly and he\'ll be your best friend.')).not.toBeNull();

  });
```
