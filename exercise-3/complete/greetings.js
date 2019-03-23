export function buildGreeting(name) {
  return `Hello, ${name}! How are you?`;
}

export function choosePartingWord(language) {
  return language === 'Spanish' ? 'Adios!' : 'Goodbye!';
}

export function choosePartingWordFromObject(data) {
  const { name, language } = data;

  return language === 'Spanish' ? `Adios, ${name}!` : `Goodbye, ${name}!`;
}

export function identifyLanguages(languages) {
  const [primary, secondary] = languages;
  return `Your primary language is ${primary}. Your secondary language is ${secondary}.`;
}

export function mapPartingWords(languages) {
  return languages.map(language => choosePartingWord(language));
}
