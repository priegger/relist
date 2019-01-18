module.exports = {
    coverageDirectory: '<rootDir>/coverage/',
    roots: ['<rootDir>/src/', '<rootDir>/tests/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    transformIgnorePatterns: ['/node_modules/'],
    testRegex: '/tests/.*\\.test.(ts|tsx)$',
    moduleDirectories: ['node_modules'],
    setupTestFrameworkScriptFile: '<rootDir>/tests/setup.js',
    collectCoverageFrom: ['src/**/*.*?'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
}
