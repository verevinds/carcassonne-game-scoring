module.exports = {
  root: true,
  extends: ['universe/native', 'prettier'],
  rules: {
    'jsx-quotes': [2, 'prefer-double'],
    'react-hooks/exhaustive-deps': 'off',
    'react/no-unescaped-entities': 'off',
    'import/no-anonymous-default-export': 'off',
    'array-callback-return': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/no-array-index-key': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': ['warn', { allow: ['error'] }],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/ban-types': 'off',
    'id-match': ['error', '^[a-zA-Z\\d_]+$', { properties: true }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
          },
          {
            pattern:
              '{{api,assets,components,config,const,controllers,data,entry,hooks,localization,middlewares,pages,routes,stores,themes,types,utils,views,websocket},{api,assets,components,config,const,controllers,data,entry,hooks,localization,middlewares,pages,routes,stores,themes,types,utils,views,websocket}/**}',
            patternOptions: { matchBase: true },
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        warnOnUnassignedImports: true,
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
      },
    ],
  },
};
