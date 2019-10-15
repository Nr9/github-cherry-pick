"use strict";

module.exports = {
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 100,
      lines: 85,
      statements: 85,
    },
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!shared-github-internals)",
  ],
  preset: "ts-jest",
  reporters: ["default", ["jest-junit", { outputDirectory: "./reports" }]],
  testEnvironment: "node",
  testRunner: "jest-circus/runner",
  globals: { "ts-jest": { isolatedModules: true } },
};
