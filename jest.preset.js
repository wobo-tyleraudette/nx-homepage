const nxPreset = require('@nrwl/jest/preset');

module.exports = {
  ...nxPreset,
  coveragePathIgnorePatterns: [
    'index.ts',
    '.module.ts',
    '.interface.ts',
    '.mock.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
