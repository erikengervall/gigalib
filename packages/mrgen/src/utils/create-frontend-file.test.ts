import { logSnapshots } from '@engervall/shared';

import { createMockMRGenOptions } from '../test-goodies/fixtures';
import {
  mockExecSync,
  mockMkdirSync,
  mockWriteFileSync,
} from '../test-goodies/mocks';
import { createFrontendFile } from './create-frontend-file';

it('should create a frontend file for a GET request', () => {
  const { mrGenOptions } = createMockMRGenOptions({
    httpMethod: 'GET',
  });

  createFrontendFile(mrGenOptions);

  expect(mockMkdirSync.mock.calls).toMatchSnapshot('fs.mkdirSync');
  expect(mockWriteFileSync.mock.calls).toMatchSnapshot('fs.writeFileSync');
  expect(JSON.stringify(mockWriteFileSync.mock.calls)).toContain('useQuery');
  expect(mockExecSync.mock.calls).toMatchSnapshot('cp.execSync');
  logSnapshots();
});

it('should create a frontend file for a POST request', () => {
  const { mrGenOptions } = createMockMRGenOptions({
    httpMethod: 'POST',
  });

  createFrontendFile(mrGenOptions);

  expect(mockMkdirSync.mock.calls).toMatchSnapshot('fs.mkdirSync');
  expect(mockWriteFileSync.mock.calls).toMatchSnapshot('fs.writeFileSync');
  expect(JSON.stringify(mockWriteFileSync.mock.calls)).toContain('useMutation');
  expect(mockExecSync.mock.calls).toMatchSnapshot('cp.execSync');
  logSnapshots();
});
