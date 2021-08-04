module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/tests/__mocks__/fileMock.js',
  },
  reporters: ['default'],
  testMatch: [
    '**/tests/integration/**/*.spec.[jt]s?(x)',
    '**/tests/unit/**/*.spec.[jt]s?(x)',
    '**/_tests_/*.[jt]s?(x)',
  ],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!vee-validate/dist/rules)'],
};
