module.exports = {
    coverageDirectory: '<rootDir>/coverage/',
    roots: ['<rootDir>/src/', '<rootDir>/tests/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    transformIgnorePatterns: ['/node_modules/'],
    testRegex: '/tests/.*\\.(ts|tsx)$',
    moduleDirectories: ['node_modules'],
    collectCoverageFrom: ['src/**/*.*?'],
}
