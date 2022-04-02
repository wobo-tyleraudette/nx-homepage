module.exports = {
  displayName: 'homepage-app-ui',
  preset: '../../../jest.preset-lib.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/homepage-app/ui',
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!@workboard-auth-ui/dist/.*)',
  ],
};
