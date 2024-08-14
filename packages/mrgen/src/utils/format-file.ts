import cp from 'node:child_process';

export function formatFile(file: string) {
  const cmd = `yarn prettier --write ${file}`;
  console.debug('Running command', cmd);
  cp.execSync(cmd);
}
