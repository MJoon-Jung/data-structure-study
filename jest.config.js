module.exports = {
  preset: "ts-jest",
  rootDir: ".",
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    '@src/(.*)$': '<rootDir>/src/**/$1',
    '@test/(.*)$': '<rootDir>/__test__/**/$1',
  },
}
