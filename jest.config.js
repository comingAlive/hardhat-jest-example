module.exports = {
    preset: "ts-jest",
    testEnvironment: "jest-environment-node-single-context",
    setupFilesAfterEnv: ["./test/_init/setupJest.ts"],
};
