/* eslint-disable @typescript-eslint/ban-ts-comment */

export const mockCp = {
  // @ts-ignore
  execSync: jest.fn(),
};

export const mockFs = {
  // @ts-ignore
  mkdirSync: jest.fn(),
  // @ts-ignore
  writeFileSync: jest.fn(),
  // @ts-ignore
  readdirSync: jest.fn(() => {
    return ['index.ts', 'module-one.ts', 'module-two.ts', 'module-three.ts'];
  }),
  // @ts-ignore
  lstatSync: jest.fn(() => {
    return {
      isDirectory: () => false,
    };
  }),
};

export function mockNodePackages() {
  // @ts-ignore
  jest.mock('node:child_process', () => {
    return mockCp;
  });

  // @ts-ignore
  jest.mock('node:fs', () => {
    return mockFs;
  });
}

export function fsSnapshots() {
  for (const [fsMethod, mockFn] of Object.entries(mockFs)) {
    // @ts-ignore
    expect(mockFn.mock.calls).toMatchSnapshot(fsMethod);
  }
}

export function cpSnapshots() {
  for (const [cpMethod, mockFn] of Object.entries(mockCp)) {
    // @ts-ignore
    expect(mockFn.mock.calls).toMatchSnapshot(cpMethod);
  }
}
