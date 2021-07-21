module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    // 'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  plugins: [],
  // ignorePatterns: ["schema.graphql", "**/generated/*"],
  // add your custom rules here
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'spaced-comment': 'off',
    'no-unused-vars': 'off', // ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'no-console': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      {
        allowArgumentsExplicitlyTypedAsAny: true,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 0,
    'prettier/prettier': 1,
    'vue/no-unused-components': 'off',
    'vue/attributes-order': 'off',
    'new-cap': 'off',
    'unicorn/prefer-type-error': 'off',
    'array-callback-return': 'off',
  },
  ignorePatterns: [''],
}
