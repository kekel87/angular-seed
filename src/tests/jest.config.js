const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('../../tsconfig');

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [`${__dirname}/setup.js`],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    '\\.(jpg|jpeg|png)$': `${__dirname}/mock-module.js`,
  },
  testPathIgnorePatterns: ['<rootDir>/e2e'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/', '.module.ts'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
