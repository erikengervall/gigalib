import { logSnapshots } from '@engervall/shared';

import { createMockMRGenOptions } from '../test-goodies/fixtures';
import {
  mockExecSync,
  mockMkdirSync,
  mockWriteFileSync,
} from '../test-goodies/mocks';
import { createBackendFile } from './create-backend-file';

it('should create and format backend files', async () => {
  // Arrange
  const { mrGenOptions } = createMockMRGenOptions();

  // Act
  createBackendFile(mrGenOptions);

  // Assert
  expect(mockMkdirSync.mock.calls).toMatchSnapshot('fs.mkdirSync');
  expect(mockWriteFileSync.mock.calls).toMatchSnapshot('fs.writeFileSync');
  expect(mockExecSync.mock.calls).toMatchSnapshot('cp.execSync');
  logSnapshots();
});
