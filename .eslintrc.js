module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json'
    },
    plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint',
        'prettier',
        'plugin:prettier/recommended'
    ],
    rules: {
        'no-console': 'error',
        'tsdoc/syntax': 'error',
        'prettier/prettier': 'error'
    }
};
