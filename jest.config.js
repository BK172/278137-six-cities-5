module.exports = {
  verbose: true,
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  setupFilesAfterEnv: [
    "<rootDir>/__mocks__/mapMock.js",
    "<rootDir>/src/configs/setup-tests.js",
  ],
};
