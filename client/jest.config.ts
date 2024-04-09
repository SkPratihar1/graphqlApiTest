// import type { Config } from '@jest/types';

// const config: Config.InitialOptions = {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   roots: ['<rootDir>/src'],
//   testMatch: ['**/__tests__/**/*.test.ts'],
// };

// export default config;

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/client/src/tests/setup.ts'],
  roots: ['<rootDir>/client/src/tests'],
  testMatch: ['**/*.test.ts'],
};

export default config;