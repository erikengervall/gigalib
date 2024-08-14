import { zEmail } from './z-email';

describe('zEmail', () => {
  // ref: https://codefool.tumblr.com/post/15288874550/list-of-valid-and-invalid-email-addresses
  it.each([
    'email@example.com',
    'firstname.lastname@example.com',
    'email@subdomain.example.com',
    'firstname+lastname@example.com',
    '1234567890@example.com',
    'email@example-one.com',
    '_______@example.com',
    'email@example.name',
    'email@example.museum',
    'email@example.co.jp',
    'firstname-lastname@example.com',
    'erik.engervall@example.com',
  ])('should return true for valid email "%s"', (input) => {
    const result = zEmail.safeParse(input);

    expect(result.success).toBe(true);
  });

  // ref: https://codefool.tumblr.com/post/15288874550/list-of-valid-and-invalid-email-addresses
  it.each([
    'plainaddress',
    '#@%^%#$@#$@#.com',
    '@example.com',
    'Joe Smith <email@example.com>',
    'email.example.com',
    'email@example@example.com',
    'email..email@example.com',
    'email@example.com (Joe Smith)',
    'email@example',
    'email@example..com',
    'Abc..123@example.com',
  ])('should return false for invalid email "%s"', (input) => {
    const result = zEmail.safeParse(input);

    expect(result.success).toBe(false);
  });
});
