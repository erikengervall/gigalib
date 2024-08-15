import { registerAggregateLogProxySpy } from '@engervall/shared';

beforeAll(async () => {
  registerAggregateLogProxySpy(console);
});
