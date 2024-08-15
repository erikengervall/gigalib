jest.mock('node:child_process', () => {
  return {
    execSync: jest.fn(),
  };
});

jest.mock('node:fs', () => {
  return {
    mkdirSync: jest.fn(),
    writeFileSync: jest.fn(),
  };
});
