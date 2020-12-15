module.exports = {
  setupFilesAfterEnv: ['<rootDir>src/setupTests.js'],
  moduleNameMapper: {
    '\\.(jpg|svg|png|scss)$': '<rootDir>/src/mocks/fileMock.js',
  },
};
