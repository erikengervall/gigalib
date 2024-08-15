import { fsSnapshots, logSnapshots } from '@engervall/shared';

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
  fsSnapshots();
  logSnapshots();
});
