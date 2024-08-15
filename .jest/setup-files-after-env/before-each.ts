beforeEach(async () => {
  /**
   * Here's a good explaination of the clear/reset methods on `jest`: https://dev.to/edwinwong90/jestclearallmocks-vs-jestresetallmocks-vs-jestrestoreallmocks-explained-5aal
   *
   * jest.clearAllMocks: "Clear all mock usage data such as mock.calls, mock.instances, mock.contexts and mock.results but not their implementation."
   * jest.resetAllMocks: "A superset of clearAllMocks() and it also reset the mock function implementations with brand new jest.fn()."
   * jest.restoreAllMocks: "Restore all mock back to their original implementation and it only works for mock was created with jest.spyOn."
   *
   * With this in mind, we'll always be interested in `clearAllMocks` to run between each individual test. If we ever move to a setup where
   * we want mock states persist between tests, we'll need to modify this piece of code.
   */
  jest.clearAllMocks();
});
