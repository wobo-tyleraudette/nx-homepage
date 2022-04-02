module.exports = {
  displayName: 'shared-ui',
  preset: '../../../jest.preset-lib.js',
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { cwd: __dirname }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/shared/ui',
  transformIgnorePatterns: [
    '<rootDir>node_modules/(?!@workboard-auth-ui/dist/.*)',
  ],
};
