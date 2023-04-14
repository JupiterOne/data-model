module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  restoreMocks: true,
  testMatch: [
    '<rootDir>/**/*.test.ts',
    '<rootDir>/**/*.test.js',
    '!**/node_modules/*',
    '!**/dist/*',
    '!**/*.bak/*',
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },

  setupFilesAfterEnv: ['./jest.env.js'],
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', '!src/index.js'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};
