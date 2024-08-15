import type { Config } from 'jest';

const config: Config = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
  passWithNoTests: true,
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/../../.jest/setup-files/mock-node-packages.ts'],
  setupFilesAfterEnv: [
    '<rootDir>/../../.jest/setup-files-after-env/before-all.ts',
    '<rootDir>/../../.jest/setup-files-after-env/before-each.ts',
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  verbose: true,
};

export default config;
