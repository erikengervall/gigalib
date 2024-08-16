let aggregateLogProxySpyCache: jest.Mock;
export const getAggregateLogProxySpy = () => {
  if (aggregateLogProxySpyCache) {
    return aggregateLogProxySpyCache;
  }

  aggregateLogProxySpyCache = jest.fn();

  return aggregateLogProxySpyCache;
};

export function registerAggregateLogProxySpy(
  /**
   * @example 'console' or 'WinstonLogger'
   */
  logger: any,
  logMethods: string[] = ['debug', 'info', 'log', 'warn', 'error'],
) {
  for (const logMethod of logMethods) {
    logger[logMethod] = jest.fn((...args) => {
      getAggregateLogProxySpy()({ [logMethod]: args });
    });
  }
}

export function logSnapshots() {
  expect(
    getAggregateLogProxySpy().mock.calls.map((call) => call[0]),
  ).toMatchSnapshot('aggregateLogProxySpy');
}
