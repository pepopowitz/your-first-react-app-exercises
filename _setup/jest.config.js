const exercise = '_setup';

module.exports = {
  rootDir: '../',
  collectCoverageFrom: [`<rootDir>/${exercise}/**/*.{js,jsx,mjs}`],
  setupFiles: ['react-app-polyfill/jsdom'],
  testMatch: [
    `<rootDir>/${exercise}/**/__tests__/**/*.{js,jsx,mjs}`,
    `<rootDir>/${exercise}/**/?(*.)(spec|test).{js,jsx,mjs}`,
  ],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/_not_important/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)':
      '<rootDir>/_not_important/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
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
