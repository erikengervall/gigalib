import type { Config } from 'jest'

const config: Config = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
  preset: 'ts-jest',
  setupFiles: [],
  setupFilesAfterEnv: [],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  verbose: true,
}

export default config
