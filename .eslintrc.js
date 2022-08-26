module.exports = {
  root: true,
  env: {
    browser: false,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json'
  },
  extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended'
  ],
  ignorePatterns: [
    'dist/*'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/array-type': ['error', {
      default: 'generic',
      readonly: 'generic'
    }],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/comma-dangle': ['error'],
    '@typescript-eslint/consistent-type-imports': ['error', {
      prefer: 'type-imports',
      disallowTypeAnnotations: false
    }],
    '@typescript-eslint/dot-notation': ['error'],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/naming-convention': ['error', {
      format: ['camelCase'],
      selector: 'variable'
    },
      {
        selector: 'typeLike',
        format: ['PascalCase']
      }
    ],
    '@typescript-eslint/no-confusing-void-expression': ['error'],
    '@typescript-eslint/no-floating-promises': ['error'],
    '@typescript-eslint/no-misused-promises': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-this-alias': ['error'],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
    '@typescript-eslint/no-unnecessary-condition': ['off'],
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/prefer-includes': ['error'],
    '@typescript-eslint/prefer-nullish-coalescing': ['error'],
    '@typescript-eslint/prefer-optional-chain': ['error'],
    '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
    '@typescript-eslint/promise-function-async': ['error'],
    '@typescript-eslint/require-await': ['error'],
    '@typescript-eslint/return-await': ['error'],
    '@typescript-eslint/space-before-blocks': ['error'],
    '@typescript-eslint/space-before-function-paren': ['error'],
    '@typescript-eslint/type-annotation-spacing': ['error']
  }
}
