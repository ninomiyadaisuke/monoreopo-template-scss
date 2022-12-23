module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'file-extension-in-import-ts',
    'simple-import-sort',
    'import',
    // "unused-imports"
  ],
  extends: [
    'airbnb-typescript', // prettierのextendsは他のextendsより後に記述する
    'plugin:@typescript-eslint/recommended',
    'next',
    'turbo',
    'prettier',
  ],
  rules: {
    // 'import/first':'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/newline-after-import': 'error',
    // 'unused-imports/no-unused-imports': 'error',
    'no-console': 'error',
    'react/no-danger': 'off', // it's self explainatory that no-danger should be used sparingly
    'react/react-in-jsx-scope': 'off', // next.js does not require react in most components
    'react/react-in-jsx-scope': 'off', // next.js does not require react in most components
    'react/prop-types': 'off', // as long as TS strict mode is off this is not required
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    // 'prettier/prettier': 'off', // don't show prettier errors as it will be fixed when saved anyway
  },
};
