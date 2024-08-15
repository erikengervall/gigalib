export const aggregateLogProxySpy = jest.fn();

export function registerAggregateLogProxySpy(
  logger: any,
  logMethods: string[] = ['debug', 'info', 'log', 'warn', 'error'],
) {
  for (const logMethod of logMethods) {
    logger[logMethod] = jest.fn((...args) => {
      aggregateLogProxySpy({ [logMethod]: args });
    });
  }
}

export function logSnapshots() {
  expect(
    aggregateLogProxySpy.mock.calls.map((call) => call[0]),
  ).toMatchSnapshot('aggregateLogProxySpy');
}
