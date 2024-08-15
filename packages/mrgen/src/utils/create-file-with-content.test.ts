import { logSnapshots } from '@engervall/shared';

import { mockMkdirSync, mockWriteFileSync } from '../test-goodies/mocks';
import { createFileWithContent } from './create-file-with-content';

it('should create a file with the given content', () => {
  // Arrange
  const filePath = 'test-file-path.txt';
  const content = `
  test content
  1
  2
  3
  `;

  // Act
  createFileWithContent(filePath, content);

  // Assert
  expect(mockMkdirSync.mock.calls).toMatchSnapshot('fs.mkdirSync');
  expect(mockWriteFileSync.mock.calls).toMatchSnapshot('fs.writeFileSync');
  logSnapshots();
});
