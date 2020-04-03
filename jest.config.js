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
    "src/**/*.ts",
    "!src/converters.ts",
    "!src/ip.ts"
  ],
  coverageThreshold: {
    global: {
      statements: 97,
      branches: 87,
      functions: 100,
      lines: 97,
    },
  },
};
