const uiPresets = require('../../../jest/jest.preset-ui.js');

module.exports = {
  displayName: 'homepage-app-ui',
  preset: '../../../jest/jest.preset-lib.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { cwd: __dirname }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/homepage-app/ui',
  transformIgnorePatterns: uiPresets.transforms,
};
