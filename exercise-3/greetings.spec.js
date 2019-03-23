import {
  buildGreeting,
  choosePartingWord,
  choosePartingWordFromObject,
  mapPartingWords,
  identifyLanguages,
} from './greetings';

// 1. Template Strings
it('builds a greeting', () => {
  const greeting = buildGreeting('Potatoes');

  expect(greeting).toEqual('Hello, Potatoes! How are you?');
});

// 2. Ternary Expressions
it('chooses a parting word', () => {
  expect(choosePartingWord('Spanish')).toEqual('Adios!');

  expect(choosePartingWord('English')).toEqual('Goodbye!');
});

// 3. Object Destructuring
it('chooses a parting word from an object', () => {
  const context = {
    name: 'Potatoes',
    language: 'English',
    age: 8,
  };

  expect(choosePartingWordFromObject(context)).toEqual('Goodbye, Potatoes!');

  context.language = 'Spanish';
  expect(choosePartingWordFromObject(context)).toEqual('Adios, Potatoes!');
});

// 4. Array Destructuring
it('identifies my primary and secondary language', () => {
  const languages = ['English', 'Spanish'];

  expect(identifyLanguages(languages)).toEqual(
    'Your primary language is English. Your secondary language is Spanish.'
  );
});

// 4: Array Mapping
it('maps to parting words', () => {
  const languages = ['Spanish', 'English', 'English', 'Spanish'];

  const partingWords = mapPartingWords(languages);

  expect(partingWords).toEqual(['Adios!', 'Goodbye!', 'Goodbye!', 'Adios!']);
});
