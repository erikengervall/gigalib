import fs from 'node:fs';
import path from 'node:path';

export function createFileWithContent(filePath: string, content: string) {
  const filePathDirName = path.dirname(filePath);
  console.debug('mkdirSync', filePathDirName);
  fs.mkdirSync(filePathDirName, { recursive: true });

  console.debug('writeFileSync', filePath);
  fs.writeFileSync(filePath, content, 'utf-8');
}
