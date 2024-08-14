import { z } from 'zod';

import {
  customZodErrorMap,
  resetGlobalCustomZodErrorMap,
  setGlobalCustomZodErrorMap,
} from './custom-zod-error-map';

const Person = z.object({
  name: z.string(),
});

describe('customZodErrorMap', () => {
  it('should set the custom zod error map', () => {
    // with default error map
    expect(() => Person.parse({ name: 123 })).toThrowErrorMatchingSnapshot();

    // with custom error map
    setGlobalCustomZodErrorMap();
    expect(() => Person.parse({ name: 123 })).toThrowErrorMatchingSnapshot();

    // reset -> back to default error map
    resetGlobalCustomZodErrorMap();
    expect(() => Person.parse({ name: 123 })).toThrowErrorMatchingSnapshot();

    // with custom error map (without data)
    setGlobalCustomZodErrorMap({ appendInputData: false });
    expect(() => Person.parse({ name: 123 })).toThrowErrorMatchingSnapshot();

    // reset -> back to default error map
    resetGlobalCustomZodErrorMap();
    expect(() => Person.parse({ name: 123 })).toThrowErrorMatchingSnapshot();

    // with custom error map (with data)
    expect(() =>
      Person.parse(
        { name: 123 },
        { errorMap: customZodErrorMap({ appendInputData: true }) },
      ),
    ).toThrowErrorMatchingSnapshot();

    // the custom error map should not be set globally
    expect(() => Person.parse({ name: 123 })).toThrowErrorMatchingSnapshot();
  });
});
