import { Kitten } from './kitten';

describe('An instance of Kitten', () => {
  // Test 1
  it('is a thing', () => {
    const kitten = new Kitten();

    expect(kitten).not.toBeUndefined();
  });

  // Test 2
  it('has whiskers', () => {
    const kitten = new Kitten();

    expect(kitten.hasWhiskers).toEqual(true);
  });

  // Test 3
  it('has hair because all mammals do', () => {
    const kitten = new Kitten();

    expect(kitten.hasHair).toEqual(true);
  });

  // Test 4
  it('has hair and whiskers', () => {
    const kitten = new Kitten();

    expect(kitten.hasHairAndWhiskers()).toEqual(true);
  });

  // Test 5
  it('meows', () => {
    const kitten = new Kitten();

    expect(kitten.meow()).toEqual('meow');
  });
});
