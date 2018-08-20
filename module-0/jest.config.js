module.exports = {
  rootDir: '../',
  collectCoverageFrom: ['<rootDir>/module-0/**/*.{js,jsx,mjs}'],
  setupFiles: ['<rootDir>/_not_important/config/polyfills.js'],
  testMatch: [
    '<rootDir>/module-0/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/module-0/**/?(*.)(spec|test).{js,jsx,mjs}',
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/_not_important/config/jest/cssTransform.js',
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
