module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['./'],
  moduleNameMapper: {
    'app/(.*)$': '<rootDir>/src/$1',
  },
};
