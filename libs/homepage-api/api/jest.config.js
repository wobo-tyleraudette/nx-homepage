module.exports = {
  displayName: 'homepage-api',
  preset: '../../../jest/jest.preset-lib.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/homepage-api/api',
  modulePathIgnorePatterns: ['./src/lib/core/transform.interceptor.ts'],
};
