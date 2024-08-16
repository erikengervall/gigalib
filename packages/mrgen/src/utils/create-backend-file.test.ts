import { getMockCp, getMockFs, logSnapshots } from '@engervall/shared';

import { createMockMRGenOptions } from '../test-goodies/fixtures';
import { createBackendFile } from './create-backend-file';

it('should create and format backend files', async () => {
  // Arrange
  const { mrGenOptions } = createMockMRGenOptions();

  // Act
  createBackendFile(mrGenOptions);

  // Assert
  expect(getMockFs().mkdirSync.mock.calls).toMatchSnapshot('fs.mkdirSync');
  expect(getMockFs().writeFileSync.mock.calls).toMatchSnapshot(
    'fs.writeFileSync',
  );
  expect(getMockCp().execSync.mock.calls).toMatchSnapshot('cp.execSync');
  logSnapshots();
});
