const exercise = 'exercise-17';

module.exports = {
  rootDir: '../',
  collectCoverageFrom: [`<rootDir>/${exercise}/**/*.{js,jsx,mjs}`],
  setupFiles: ['<rootDir>/_not_important/config/polyfills.js'],
  setupTestFrameworkScriptFile: `<rootDir>/${exercise}/config/setupTests.js`,
  testMatch: [
    `<rootDir>/${exercise}/**/__tests__/**/*.{js,jsx,mjs}`,
    `<rootDir>/${exercise}/**/?(*.)(spec|test).{js,jsx,mjs}`,
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)':
      '<rootDir>/_not_important/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
    'mjs',
  ],
};
