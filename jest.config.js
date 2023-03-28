// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
    // Add more setup options before each test is run
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    coverageDirectory: "test-coverage", //new folder name instead of the default name "coverage"
    reporters: [
        [
            "jest-html-reporters",
            {
                "publicPath": "./html-report", //folder where this reporter is going to be generated
                "filename": "report.html",
                "openReport": false, //Change to true if we want to open the report automatically
                "urlForTestFiles": "../",
            }
        ]
    ],
    coverageThreshold: {
        "global": {
            "branches": 80,
            "functions": 80,
            "lines": 80,
            "statements": 80
        }
    },
}


// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)