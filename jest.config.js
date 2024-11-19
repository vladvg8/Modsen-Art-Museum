module.exports = {
  testMatch: [
    "**/src/**/*.(test|spec).(ts|tsx|js|jsx)"
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    "^assets(.*)$": "<rootDir>/src/assets$1",
    "^api(.*)$": "<rootDir>/src/api$1",
    "^components(.*)$": "<rootDir>/src/components$1",
    "^constants(.*)$": "<rootDir>/src/constants$1",
    "^contexts(.*)$": "<rootDir>/src/contexts$1",
    "^hooks(.*)$": "<rootDir>/src/hooks$1",
    "^pages(.*)$": "<rootDir>/src/pages$1"
  }
};
