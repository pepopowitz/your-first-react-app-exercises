# Possible Solutions

## Template Strings

```js
export function buildGreeting(name) {
  return `Hello, ${name}! How are you?`;
}
```

## Ternary Expressions

```js
export function choosePartingWord(language) {
  return language === 'Spanish' ? 'Adios!' : 'Goodbye!';
}
```

## Object Destructuring 1

```js
export function choosePartingWordFromObject(data) {
  const { name, language } = data;

  return language === 'Spanish' ? `Adios, ${name}!` : `Goodbye, ${name}!`;
}
```

## Object Destructuring 2

```js
export function choosePartingWordFromObject({ name, language }) {
  return language === 'Spanish' ? `Adios, ${name}!` : `Goodbye, ${name}!`;
}
```

## Array Destructuring

```js
export function identifyLanguages(languages) {
  const [primary, secondary] = languages;
  return `Your primary language is ${primary}. Your secondary language is ${secondary}.`;
}

// OR

export function identifyLanguages([primary, secondary]) {
  return `Your primary language is ${primary}. Your secondary language is ${secondary}.`;
}
```

## Array Mapping

```js
export function mapPartingWords(languages) {
  return languages.map(language => {
    return choosePartingWord(language);
  });
}
```

## Implicit Return

```js
export function mapPartingWords(languages) {
  return languages.map(language => choosePartingWord(language));
}
```
