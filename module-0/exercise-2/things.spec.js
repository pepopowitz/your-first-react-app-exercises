import { ThingOne, ThingTwo } from './things';

// 1. Uncomment lines 4-11 for test 1.
// it('is a thing', () => {
//   //  To "instantiate" a class, call `new ClassName()`. 
//   //   We won't be doing very much of this, if any. 
//   //   React will take care of this for us, behind the scenes.
//   const thing = new ThingOne();

//   expect(thing).not.toBeUndefined();
// })

// 2. Uncomment lines 14-21 for test 2.
// it('inherits base properties', () => {
//   const thingTwo = new ThingTwo();

//   //  Since ThingOne extends Thing, we get both properties
//   //   on our instance of thingOne.
//   expect(thingTwo.thingTwoProperty).toEqual(2);
//   expect(thingTwo.thingOneProperty).toEqual(1);
// })

// 3. Uncomment lines 24-29 for test 3.
// it('adds it up', () => {
//   const thingTwo = new ThingTwo();

//   //  Here we're calling an instance method.
//   expect(thingTwo.addItUp()).toEqual(3);
// });

// 4. Uncomment lines 32-37 for test 4.
// it('subtracts it', () => {
//   const thingTwo = new ThingTwo();

//   //  Here we're calling a class property, which is an anonymous function.
//   expect(thingTwo.subtractIt()).toEqual(1);
// });
