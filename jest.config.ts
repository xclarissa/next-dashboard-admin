// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require("next/jest");

const createJestConfig = nextJest({
	dir: "./",
});

const customJestConfig = {
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	testEnvironment: "jest-environment-jsdom",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
	clearMocks: true,
};

module.exports = createJestConfig(customJestConfig);
