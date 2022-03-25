const defaultJest = require('./jest.preset');

module.exports = {
  ...defaultJest,
  collectCoverageFrom: ['<rootDir>/src/app/**/*.{js,jsx,ts,tsx}'],
};
