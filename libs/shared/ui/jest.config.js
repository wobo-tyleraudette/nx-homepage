const uiPresets = require('../../../jest/jest.preset-ui.js');

module.exports = {
  displayName: 'shared-ui',
  preset: '../../../jest/jest.preset-lib.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { cwd: __dirname }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/shared/ui',
  transformIgnorePatterns: uiPresets.transforms,
};
