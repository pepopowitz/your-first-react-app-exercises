import { ThingOne, ThingTwo } from './things';

describe('An instance of ThingTwo', () => {
  // Test 1
  it('is a thing', () => {
    //  To "instantiate" a class, call `new ClassName()`.
    //   We won't be doing very much of this, if any.
    //   React will take care of this for us, behind the scenes.
    const thing = new ThingOne();

    expect(thing).not.toBeUndefined();
  });

  // Test 2
  it('has a thingTwoProperty', () => {
    const thingTwo = new ThingTwo();

    expect(thingTwo.thingTwoProperty).toEqual(2);
  });

  // Test 3
  it('inherits a thingOneProperty from ThingOne', () => {
    const thingTwo = new ThingTwo();

    expect(thingTwo.thingOneProperty).toEqual(1);
  });

  // Test 4
  it('adds it up', () => {
    const thingTwo = new ThingTwo();

    expect(thingTwo.addItUp()).toEqual(3);
  });
});
