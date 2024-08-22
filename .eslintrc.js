module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'jsdoc'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:jsdoc/recommended'],
  root: true,
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: [
    '.eslintrc.js',
    'projects/**/*',
    'node_modules/**/*',
    'coverage/**/*',
    'dist/**/*',
    'documentation/**/*',
    '*.spec.ts'
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'jsdoc/require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          FunctionExpression: true,
          ArrowFunctionExpression: false
        },
        checkConstructors: false
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        endOfLine: 'auto',
        tabWidth: 2,
        semi: true,
        printWidth: 120,
        bracketSameLine: false,
        bracketSpacing: true,
        arrowParens: 'always'
      }
    ]
  }
};
