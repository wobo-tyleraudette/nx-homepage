const nxPreset = require('@nrwl/jest/preset');

module.exports = {
  ...nxPreset,
  collectCoverageFrom: ['<rootDir>/src/lib/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['index.ts', '.module.ts', '.interface.ts'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
