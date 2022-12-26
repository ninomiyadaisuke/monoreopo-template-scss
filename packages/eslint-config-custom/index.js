module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  // ignorePatterns: ['.eslintrc.*', 'next.config.js'], // https://zenn.dev/warugaki/scraps/f71614869a38a5
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'simple-import-sort', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'next',
    'turbo',
    'prettier',
  ],
  rules: {
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'no-console': 'error',
    'react/no-danger': 'off', // it's self explainatory that no-danger should be used sparingly
    'react/react-in-jsx-scope': 'off', // next.js does not require react in most components
    'react/react-in-jsx-scope': 'off', // next.js does not require react in most components
    'react/prop-types': 'off', // as long as TS strict mode is off this is not required
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'prettier/prettier': 'off', // don't show prettier errors as it will be fixed when saved anyway
  },
};
