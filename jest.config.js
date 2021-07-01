module.exports = {
  rootDir: __dirname,
  setupFilesAfterEnv: ['<rootDir>/jest/setup.js'],
  collectCoverageFrom: [
    'packages/*/src/**/*.tsx',
    'packages/*/src/**/*.ts',
    '!packages/build/**',
    '!packages/test-utils/**',
  ],
  testMatch: ['<rootDir>/packages/*/src/**/__tests__/**/?(*.)(spec|test).ts(x|)'],
};
