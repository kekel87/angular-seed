/* eslint @typescript-eslint/no-var-requires: off */
const { pathsToModuleNameMapper } = require('ts-jest');

const { paths } = require('../../tsconfig').compilerOptions;

module.exports = {
  moduleNameMapper: pathsToModuleNameMapper(paths, { prefix: '<rootDir>/' }),
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
