/** @type {import("prettier").Options} */
const config = {
  printWidth: 80,
  proseWrap: 'always',
  semi: true,
  singleQuote: true,
  importOrder: [
    'reflect-metadata|dotenv|src/client/styles.css',
    '<THIRD_PARTY_MODULES>',
    'shared',
    '^[(./)]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    // 'prettier-plugin-tailwindcss',
  ],
  // tailwindConfig: './packages/frontend/tailwind.config.js',
};

module.exports = config;
