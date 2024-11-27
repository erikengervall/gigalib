import { arrayPickAt } from './array-pick-at';

const FALLBACK = 'N/A (filename)';

export function getFilenameFromErrorStack(
  errorStack: string,
  {
    lineNumber = 2,
    backendDistPath = 'packages/backend/dist/',
  }: {
    lineNumber?: number;
    backendDistPath?: string;
  } = {
    lineNumber: 2,
    backendDistPath: 'packages/backend/dist/',
  },
) {
  if (!errorStack) {
    return FALLBACK;
  }

  const line = arrayPickAt(errorStack.split('\n'), lineNumber);

  if (!line) {
    return 'N/A (line)';
  }

  const filename = arrayPickAt(
    arrayPickAt(line.split(backendDistPath), 1)?.split('.'),
    0,
  );

  if (!filename) {
    return FALLBACK;
  }

  return filename;
}
