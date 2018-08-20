import {
  buildGreeting,
  choosePartingWord,
  choosePartingWordDestructured,
  mapPartingWords,
  removeUnknownLanguages,
} from './greetings';

// 1. Uncomment lines 10-15 for test 1.
// //  Calling a function that is using string template literals.
// it('builds a greeting', () => {
//   const greeting = buildGreeting('Matt');

//   expect(greeting).toEqual('Hello, Matt! How are you?');
// });

// 2. Uncomment lines 18-23 for test 2.
// //  Calling a function that is making a decision with a ternary expression.
// it('chooses a parting word', () => {
//   expect(choosePartingWord('Spanish')).toEqual('Adios!');

//   expect(choosePartingWord('English')).toEqual('Goodbye!');
// });

// 3. Uncomment lines 25-33 for test 3.
// //  We're calling a function that is destructuring an object we pass in.
// //  Object destructuring is useful when you're passing JS objects as arguments to functions.
// it('chooses a parting word with destructuring', () => {
//   const context = {
//     name: 'Steve',
//     language: 'English',
//     age: 41,
//   };

//   expect(choosePartingWordDestructured(context)).toEqual('Goodbye, Steve!');
// });

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

// //  Calling a function that takes an array, but only returns some values, based on a condition.
// it('filters languages', () => {
//   const languages = [
//     'Spanish',
//     'English',
//     'German',
//     'French'
//   ];

//   const result = removeUnknownLanguages(languages);

//   expect(result).toEqual([
//     'Spanish',
//     'English'
//   ]);
// })
// //  Calling a function that is using string template literals.
// it('builds a greeting', () => {
//   const greeting = buildGreeting('Matt');

//   expect(greeting).toEqual('Hello, Matt! How are you?');
// });

// //  We're calling a function that is making a decision with a ternary expression.
// it('chooses a parting word', () => {
//   expect(choosePartingWord('Spanish')).toEqual('Adios!');

//   expect(choosePartingWord('English')).toEqual('Goodbye!');
// });

// //  We're calling a function that is destructuring an object we pass in.
// //  Object destructuring is useful when you're passing JS objects as arguments to functions.
// it('chooses a parting word with destructuring', () => {
//   const context = {
//     name: 'Steve',
//     language: 'English',
//     age: 41,
//   };

//   expect(choosePartingWordDestructured(context)).toEqual('Goodbye, Steve!');
// });

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

// //  Calling a function that takes an array, but only returns some values, based on a condition.
// it('filters languages', () => {
//   const languages = [
//     'Spanish',
//     'English',
//     'German',
//     'French'
//   ];

//   const result = removeUnknownLanguages(languages);

//   expect(result).toEqual([
//     'Spanish',
//     'English'
//   ]);
// })
