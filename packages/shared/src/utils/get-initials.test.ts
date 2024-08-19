import { getInitials } from './get-initials';

it.each([
  { sentence: 'John Doe', maxLength: undefined, expected: 'JD' },
  { sentence: 'John Doe', maxLength: 1, expected: 'J' },
  { sentence: 'John Doe', maxLength: 3, expected: 'JD' },
  { sentence: '', maxLength: undefined, expected: '' },
  { sentence: 'John', maxLength: undefined, expected: 'J' },
  { sentence: 'John Doe Max Untz', maxLength: undefined, expected: 'JD' },
  { sentence: 'John Doe Max Untz', maxLength: 3, expected: 'JDM' },
])(
  'should return "$sentence" -> "$expected" (maxLength: $maxLength)',
  ({ sentence, expected, maxLength }) => {
    expect(getInitials(sentence, maxLength)).toBe(expected);
  },
);
