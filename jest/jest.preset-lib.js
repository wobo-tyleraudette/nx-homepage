const defaultJest = require('./jest.preset');

module.exports = {
  ...defaultJest,
  collectCoverageFrom: ['<rootDir>/src/lib/**/*.{js,jsx,ts,tsx}'],
};
