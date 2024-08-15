import cp from 'node:child_process';
import fs from 'node:fs';

import { logSnapshots } from '@engervall/shared';

import { createMockMRGenOptions } from '../test-goodies/fixtures';
import { createBackendFile } from './create-backend-file';

it('should create and format backend files', async () => {
  // Arrange
  const { mrGenOptions } = createMockMRGenOptions();

  // Act
  createBackendFile(mrGenOptions);

  // Assert
  expect((fs.mkdirSync as jest.Mock).mock.calls).toMatchSnapshot(
    'fs.mkdirSync',
  );
  expect((fs.writeFileSync as jest.Mock).mock.calls).toMatchSnapshot(
    'fs.writeFileSync',
  );
  expect((cp.execSync as jest.Mock).mock.calls).toMatchSnapshot('cp.execSync');
  logSnapshots();
});
