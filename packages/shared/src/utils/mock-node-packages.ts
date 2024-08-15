export const mockCp = {
  execSync: jest.fn(),
};

export const mockFs = {
  mkdirSync: jest.fn(),
  writeFileSync: jest.fn(),
  readdirSync: jest.fn(() => {
    return ['index.ts', 'module-one.ts', 'module-two.ts', 'module-three.ts'];
  }),
  lstatSync: jest.fn(() => {
    return {
      isDirectory: () => false,
    };
  }),
};

export function mockNodePackages() {
  jest.mock('node:child_process', () => {
    return mockCp;
  });

  jest.mock('node:fs', () => {
    return mockFs;
  });
}

export function fsSnapshots() {
  for (const [fsMethod, mockFn] of Object.entries(mockFs)) {
    expect(mockFn.mock.calls).toMatchSnapshot(fsMethod);
  }
}

export function cpSnapshots() {
  for (const [cpMethod, mockFn] of Object.entries(mockCp)) {
    expect(mockFn.mock.calls).toMatchSnapshot(cpMethod);
  }
}
