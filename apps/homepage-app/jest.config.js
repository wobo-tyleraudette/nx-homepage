module.exports = {
  displayName: 'homepage-app',
  preset: '../../jest.preset-app.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/homepage-app',
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!@workboard-auth-ui/dist/.*)"
  ],
};
