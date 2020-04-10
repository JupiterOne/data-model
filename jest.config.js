const { defaults } = require("jest-config");

module.exports = {
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  setupFilesAfterEnv: ['./jest.env.js'],
  testMatch: ["<rootDir>/src/**/*.test.{js,ts}"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts"],
  testEnvironment: "node",
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts"
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};
