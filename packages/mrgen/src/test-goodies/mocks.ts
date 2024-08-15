import cp from 'node:child_process';
import fs from 'node:fs';

export const mockExecSync = cp.execSync as jest.Mock;
export const mockMkdirSync = fs.mkdirSync as jest.Mock;
export const mockWriteFileSync = fs.writeFileSync as jest.Mock;
