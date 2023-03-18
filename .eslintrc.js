module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
  extends: ['next', 'next/core-web-vitals'],
  rules: {
    'react-hooks/rules-of-hooks': 'off',
  },
  globals: {
    React: true,
    JSX: true,
  },
};
