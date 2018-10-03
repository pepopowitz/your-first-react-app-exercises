# Possible Solutions

## FriendFlipper: Front

```jsx
  renderFront() {
    const { friend } = this.props;
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div className={styles.front}>
            <div className={styles.frontContents} data-testid="front">
              // ...
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
```

## FriendFlipper: Back

```jsx
  renderBack() {
    const { friend } = this.props;
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div className={styles.back}>
            <div
              className={classNames(styles.backContents, styles[theme])}
              data-testid="back"
            >
              // ...
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
```

## Front: Arrange
```jsx
  it('defaults to the front side', () => {
    const friend = {
      name: 'Mr. Smidgens',
      colors: ['brown'],
      bio:
        "This little guy likes a bowl of milk at bedtime. Scratch his belly and he'll be your best friend.",
    };

    // ...
  });
```


## Front: Act
```jsx
  it('defaults to the front side', () => {
    // ...

    const context = render(
      <MemoryRouter>
        <ThemeProvider>
          <FriendFlipper friend={friend} />
        </ThemeProvider>
      </MemoryRouter>
    );

    // ...
  });
```


## Front: Assert
```jsx
  it('defaults to the front side', () => {
    // ...

    // things from the front side SHOULD be there
    expect(context.queryByTestId('front')).not.toBeNull();

    // things from the back side SHOULD NOT be there
    expect(context.queryByTestId('back')).toBeNull();
  });
```

## Front: Complete Test
```jsx
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
```

## Back: Arrange
```jsx
  it('flips to the back side after a button click', () => {
    const friend = {
      name: 'Mr. Smidgens',
      colors: ['brown'],
      bio:
        "This little guy likes a bowl of milk at bedtime. Scratch his belly and he'll be your best friend.",
    };

    // ...

  });
  ```
## Back: Act
```jsx
  it('flips to the back side after a button click', () => {
    // ...

    const context = render(
      <MemoryRouter>
        <ThemeProvider>
          <FriendFlipper friend={friend} />
        </ThemeProvider>
      </MemoryRouter>
    );

    const button = context.getByText('Details >');
    fireEvent.click(button);

    // ...

  });
```

## Back: Assert
```jsx
  it('flips to the back side after a button click', () => {
    // ...

    // things from the front side SHOULD NOT be there
    expect(context.queryByTestId('front')).toBeNull();

    // things from the back side SHOULD be there
    expect(context.queryByTestId('back')).not.toBeNull();
  });
```

## Back: Complete Test
```jsx
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
```
