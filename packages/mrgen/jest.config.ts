import type { Config } from 'jest';

import rootJestConfig from '../../jest.config';

const config: Config = {
  ...rootJestConfig,
  setupFiles: [
    ...(rootJestConfig.setupFiles ?? []),
    // add more here
  ],
  setupFilesAfterEnv: [
    ...(rootJestConfig.setupFilesAfterEnv ?? []),
    // add more here
  ],
};

export default config;
