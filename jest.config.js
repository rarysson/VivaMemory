module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript",
  testMatch: ["**/*.test.[jt]s"],
  transform: {
    "^.+\\.vue$": "vue-jest"
  },
  setupFiles: ["<rootDir>/tests/jest/setup.js"],
  collectCoverageFrom: ["<rootDir>/src/**/*.vue"],
  coverageReporters: ["lcov", "text-summary"]
};
