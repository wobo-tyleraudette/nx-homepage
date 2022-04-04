const uiPresets = require('../../jest/jest.preset-ui.js');

module.exports = {
  displayName: 'homepage-app',
  preset: '../../jest/jest.preset-app.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { cwd: __dirname }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/homepage-app',
  transformIgnorePatterns: uiPresets.transforms,
};
