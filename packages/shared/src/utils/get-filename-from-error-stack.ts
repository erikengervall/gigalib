import { arrayPickAt } from './array-pick-at';

export function getFilenameFromErrorStack(errorStack?: string) {
  const line = arrayPickAt(errorStack?.split('\n'), 2);

  if (!line) {
    return 'N/A (line)';
  }

  const filename = arrayPickAt(
    arrayPickAt(line.split('packages/backend/dist/'), 1)?.split('.'),
    0,
  );

  if (!filename) {
    return 'N/A (filename)';
  }

  return filename;
}
