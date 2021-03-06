export function buildGreeting(name) {
  return 'Hello, ' + name + '! How are you?';
}

export function choosePartingWord(language) {
  if (language === 'Spanish') {
    return 'Adios!';
  } else {
    return 'Goodbye!';
  }
}

export function choosePartingWordFromObject(data) {
  const name = data.name;
  const language = data.language;
  return language === 'Spanish' ? `Adios, ${name}!` : `Goodbye, ${name}!`;
}

export function identifyLanguages(languages) {
  const primary = languages[0];
  const secondary = languages[1];
  return `Your primary language is ${primary}. Your secondary language is ${secondary}.`;
}

export function mapPartingWords(languages) {
  let results = [];

  for (let i = 0; i < languages.length; i++) {
    results.push(choosePartingWord(languages[i]));
  }

  return results;
}
