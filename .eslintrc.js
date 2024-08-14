module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
    curly: 'error', // force curly braces
    '@typescript-eslint/consistent-type-imports': 'error', // Use `import type` for type imports

    '@typescript-eslint/no-explicit-any': 'warn',

    'react/prop-types': 'off', // Use typescript instead
    'new-cap': 'off', // Interferes with typeorm entities
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-autofocus': 'off',

    'consistent-return': 'off',
  },
};
