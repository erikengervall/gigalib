import { logSnapshots, mockCp, mockFs } from '@engervall/shared';

import { createMockMRGenOptions } from '../test-goodies/fixtures';
import { createBackendFile } from './create-backend-file';

it('should create and format backend files', async () => {
  // Arrange
  const { mrGenOptions } = createMockMRGenOptions();

  // Act
  createBackendFile(mrGenOptions);

  // Assert
  expect(mockFs.mkdirSync.mock.calls).toMatchSnapshot('fs.mkdirSync');
  expect(mockFs.writeFileSync.mock.calls).toMatchSnapshot('fs.writeFileSync');
  expect(mockCp.execSync.mock.calls).toMatchSnapshot('cp.execSync');
  logSnapshots();
});
