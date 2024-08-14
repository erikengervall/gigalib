import { zUlid } from './z-ulid';

describe('zUlid', () => {
  const validUlid = '01GS6VY2PJTRHFTTT746NRPS12';

  it.each([validUlid, '01GS6VYA0380ARRTEDJEYGG02H'])(
    'should return true for valid ulid "%s"',
    (input) => {
      const result = zUlid.safeParse(input);

      expect(result.success).toBe(true);
    },
  );

  it.each([
    {
      input: '01GS6VYA0380ARRTEDJEYGG02-',
      reason: 'invalid last character "-"',
    },
    {
      input: '01GS6VYA0380ARRTEDJEYGG02*',
      reason: 'invalid last character "*"',
    },
    {
      input: '01GS6VYA0380ARRTEDJEYGG02^',
      reason: 'invalid last character "^"',
    },
    {
      input: '01GS6VYA0380ARRTEDJEYGG02I',
      reason: 'invalus invalid character "I"',
    },
    {
      input: '01GS6VYA0380ARRTEDJEYGG02L',
      reason: 'invalus invalid character "L"',
    },
    {
      input: '01GS6VYA0380ARRTEDJEYGG02O',
      reason: 'invalus invalid character "O"',
    },
    {
      input: '01GS6VYA0380ARRTEDJEYGG02U',
      reason: 'invalus invalid character "U"',
    },
    {
      input: 'X1GS6VYA0380ARRTEDJEYGG02H',
      reason: 'invalid first character',
    },
    {
      input: validUlid.substring(0, validUlid.length - 1),
      reason: 'too short',
    },
    {
      input: validUlid + 'H',
      reason: 'too long',
    },
  ])('should return false for invalid ulid "$input" ($reason)', ({ input }) => {
    const result = zUlid.safeParse(input);

    expect(result.success).toBe(false);
  });
});
