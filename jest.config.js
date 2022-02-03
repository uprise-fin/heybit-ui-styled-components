module.exports = {
  preset: "ts-jest",
  runner: "jest-electron/runner",
  testEnvironment: "jest-electron/environment",
  setupFiles: ["./dist/index.js"],
};

// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "jest-environment-jsdom-sixteen",
//   setupFiles: ["./dist/index.js"],
// };
