module.exports = {
  displayName: 'shared-ui',
  preset: '../../../jest.preset-lib.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/shared/ui',
  // transformIgnorePatterns: [
  //   '../../../node_modules/(?!@workboard-auth-ui/dist/.*)',
  // ],
};
