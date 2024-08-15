import { fsSnapshots } from '@engervall/shared';

import { createIndexFileRecurse } from './create-index-file-recursively';

it('should create index files recursively', () => {
  createIndexFileRecurse({ dir: __dirname, withAlias: true });

  fsSnapshots();
});
