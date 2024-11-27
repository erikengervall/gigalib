import { getFilenameFromErrorStack } from './get-filename-from-error-stack';

describe('getFilenameFromErrorStack', () => {
  it('should return the filename from the error stack', () => {
    const errorStack = `Error
        at Object.debug (/Users/username/dev/***/packages/backend/dist/api/middlewares.js:45:21)
        at BlockedCartService._callee8$ (/Users/username/dev/***/packages/backend/dist/services/blocked-cart.js:257:33)
        at tryCatch (/Users/username/dev/***/packages/backend/node_modules/@babel/runtime/helpers/regeneratorRuntime.js:45:16)
        at Generator.<anonymous> (/Users/username/dev/***/packages/backend/node_modules/@babel/runtime/helpers/regeneratorRuntime.js:133:17)
        at Generator.next (/Users/username/dev/***/packages/backend/node_modules/@babel/runtime/helpers/regeneratorRuntime.js:74:21)
        at asyncGeneratorStep (/Users/username/dev/***/packages/backend/node_modules/@babel/runtime/helpers/asyncToGenerator.js:3:24)
        at _next (/Users/username/dev/***/packages/backend/node_modules/@babel/runtime/helpers/asyncToGenerator.js:22:9)
        at process.processTicksAndRejections (node:internal/process/task_queues:95:5)`;

    const filename = getFilenameFromErrorStack(errorStack);

    expect(filename).toBe('services/blocked-cart');
  });

  describe('fallback', () => {
    it('should return the filename from the error stack', () => {
      const errorStack = undefined as unknown as NonNullable<Error['stack']>;

      const filename = getFilenameFromErrorStack(errorStack);

      expect(filename).toBe('N/A (filename)');
    });

    it('should return the filename from the error stack', () => {
      const errorStack = '';

      const filename = getFilenameFromErrorStack(errorStack);

      expect(filename).toBe('N/A (filename)');
    });

    it('should return N/A (filename)', () => {
      const errorStack = `Error
      at _next (/Users/username/dev/***/packages/backend/node_modules/@babel/runtime/helpers/asyncToGenerator.js:22:9)
      `;

      const filename = getFilenameFromErrorStack(errorStack);

      expect(filename).toBe('N/A (filename)');
    });
  });
});
