let mockCpCache: {
  [key: string]: jest.Mock;
};
export const getMockCp = () => {
  if (mockCpCache) {
    return mockCpCache;
  }

  mockCpCache = {
    execSync: jest.fn(),
  };

  return mockCpCache;
};

let mockFsCache: {
  [key: string]: jest.Mock;
};
export const getMockFs = () => {
  if (mockFsCache) {
    return mockFsCache;
  }

  mockFsCache = {
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

  return mockFsCache;
};

export function mockNodePackages() {
  jest.mock('node:child_process', () => {
    return getMockCp();
  });

  jest.mock('node:fs', () => {
    return getMockFs();
  });
}

export function fsSnapshots() {
  for (const [fsMethod, mockFn] of Object.entries(getMockFs())) {
    expect(mockFn.mock.calls).toMatchSnapshot(fsMethod);
  }
}

export function cpSnapshots() {
  for (const [cpMethod, mockFn] of Object.entries(getMockCp())) {
    expect(mockFn.mock.calls).toMatchSnapshot(cpMethod);
  }
}
