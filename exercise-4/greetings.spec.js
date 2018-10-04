import {
  buildGreeting,
  choosePartingWord,
  choosePartingWordFromObject,
  mapPartingWords,
} from './greetings';

// 1: Uncomment the next 6 lines for test 1.
// //  Calling a function that is using string template literals.
// it('builds a greeting', () => {
//   const greeting = buildGreeting('Matt');

//   expect(greeting).toEqual('Hello, Matt! How are you?');
// });



// 2: Uncomment the next 6 lines for test 2.
// //  Calling a function that is making a decision with a ternary expression.
// it('chooses a parting word', () => {
//   expect(choosePartingWord('Spanish')).toEqual('Adios!');

//   expect(choosePartingWord('English')).toEqual('Goodbye!');
// });




// 3: Uncomment the next 11 lines for test 3.
// //  We're calling a function that is destructuring an object we pass in.
// //  Object destructuring is useful when you're passing JS objects as arguments to functions.
// it('chooses a parting word from an object', () => {
//   const context = {
//     name: 'Steve',
//     language: 'English',
//     age: 41,
//   };

//   expect(choosePartingWordFromObject(context)).toEqual('Goodbye, Steve!');
// });



// 4: Uncomment the next 19 lines for test 4.
// //  We're calling a function that takes an array, and returns a new array with each value modified.
// //  (This is called "mapping" an array)
// it('maps to parting words', () => {
//   const languages = [
//     'Spanish', 
//     'English',
//     'English',
//     'Spanish'
//   ];

//   const partingWords = mapPartingWords(languages);

//   expect(partingWords).toEqual([
//     'Adios!',
//     'Goodbye!',
//     'Goodbye!',
//     'Adios!',
//   ])
// });

