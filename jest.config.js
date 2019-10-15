"use strict";

module.exports = {
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
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
