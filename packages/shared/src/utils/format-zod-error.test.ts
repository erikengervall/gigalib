import { z } from 'zod';

import { formatZodError } from './format-zod-error';

describe('formatZodError', () => {
  const Person = z.object({
    name: z.string(),
    age: z.number(),
    nested: z.object({
      field: z.string(),
    }),
  });
  const Options = z.union([z.literal('option-1'), z.literal('option-2')]);

  it('should format a ZodError for a union', () => {
    const invalidOptions = Options.safeParse('not-an-option');
    if (invalidOptions.success) {
      fail("Shouldn't reach this point");
    }

    const result = formatZodError(invalidOptions.error, 'Options');

    expect(result).toMatchSnapshot();
  });

  it('should format a ZodError with an identity', () => {
    const invalidPerson = Person.safeParse({ name: 1 });
    if (invalidPerson.success) {
      fail("Shouldn't reach this point");
    }

    const result = formatZodError(invalidPerson.error, 'Person');

    expect(result).toMatchSnapshot();
  });

  it('should format a ZodError without an identity', () => {
    const invalidPerson = Person.safeParse({ name: 1 });
    if (invalidPerson.success) {
      fail("Shouldn't reach this point");
    }

    const result = formatZodError(invalidPerson.error, 'Person');

    expect(result).toMatchSnapshot();
  });

  it('should format a ZodError with several errors', () => {
    const Person = z.object({
      name: z.string().min(5),
      age: z.number().min(33),
    });
    const invalidPerson = Person.safeParse({
      name: 'Rob',
      age: 32,
    });
    if (invalidPerson.success) {
      fail("Shouldn't reach this point");
    }

    const result = formatZodError(invalidPerson.error, 'Person');

    expect(result).toMatchSnapshot();
  });

  it('should truncate if more than 100 issues', () => {
    const Person = z.array(
      z.object({
        name: z.string().min(5),
        age: z.number().min(33),
      }),
    );
    const invalidPerson = Person.safeParse(
      Array.from({ length: 300 }).map(() => ({
        name: 'Rob',
        age: 32,
      })),
    );
    if (invalidPerson.success) {
      fail("Shouldn't reach this point");
    }

    const result = formatZodError(invalidPerson.error, 'Person');

    expect(result.split('\n').length).toMatchSnapshot(`101`);
    expect(result).toMatchSnapshot();
  });
});
