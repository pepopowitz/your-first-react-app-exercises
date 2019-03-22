import addThree, { add } from './add';

// 1: Uncomment the next 5 lines to test the `add` function
it('adds two numbers', function() {
  const result = add(1, 4);

  expect(result).toEqual(5);
});

// 2: Uncomment the next 5 lines to test the `addThree` function
it('adds 3 to something', () => {
  const result = addThree(5);

  expect(result).toEqual(8);
});
