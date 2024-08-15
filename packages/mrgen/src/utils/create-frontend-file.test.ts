import {
  cpSnapshots,
  fsSnapshots,
  logSnapshots,
  mockFs,
} from '@engervall/shared';

import { createMockMRGenOptions } from '../test-goodies/fixtures';
import { createFrontendFile } from './create-frontend-file';

it('should create a frontend file for a GET request', () => {
  const { mrGenOptions } = createMockMRGenOptions({
    httpMethod: 'GET',
  });

  createFrontendFile(mrGenOptions);

  fsSnapshots();
  expect(JSON.stringify(mockFs.writeFileSync.mock.calls)).toContain('useQuery');
  cpSnapshots();
  logSnapshots();
});

it('should create a frontend file for a POST request', () => {
  const { mrGenOptions } = createMockMRGenOptions({
    httpMethod: 'POST',
  });

  createFrontendFile(mrGenOptions);

  fsSnapshots();
  expect(JSON.stringify(mockFs.writeFileSync.mock.calls)).toContain(
    'useMutation',
  );
  cpSnapshots();
  logSnapshots();
});
