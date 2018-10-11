module.exports = {
  preset: 'react-native',
  clearMocks: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/../../__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/../../__mocks__/styleMock.js',
  },
  testURL: 'http://localhost',
  globals: {
    __DEV__: true,
  },
  transform: {
    '^.+\\.jsx?$': './babel-jest',
  },
};