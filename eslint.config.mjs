import js from '@eslint/js';
import next from '@next/eslint-plugin-next';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import unusedImports from 'eslint-plugin-unused-imports';
import reactHooks from 'eslint-plugin-react-hooks'; // ← Add this import

export default [
  // Base JavaScript configuration
  js.configs.recommended,

  // TypeScript configuration
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'unused-imports': unusedImports,
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      ...typescriptEslint.configs['eslint-recommended'].rules,

      // Your TypeScript rules
      'no-undef': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-duplicate-enum-values': 'warn',
      '@typescript-eslint/no-restricted-types': [
        'error',
        {
          // extendDefaults: true,
          types: {
            '{}': "Use 'Record<string, unknown>' instead.",
          },
        },
      ],
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-empty-function': [
        'error',
        {
          allow: ['arrowFunctions', 'functions', 'methods', 'constructors'],
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',

      // Unused imports
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
          caughtErrors: 'none',
        },
      ],
    },
  },

  // React configuration
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react: react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // Your React rules
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      'react-hooks/preserve-manual-memoization': 'off',
      'react-hooks/incompatible-library': 'off',
      'react-hooks/refs': 'off',
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'ignore' }],
      'jsx-quotes': ['error', 'prefer-single'],
    },
    settings: {
      react: {
        version: 'detect',
        runtime: 'automatic', // ← Add this for new JSX transform
      },
    },
  },

  // Next.js configuration
  {
    plugins: {
      '@next/next': next,
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    // plugins: {
    //   '@next/next': next,
    // },
    rules: {
      ...next.configs.recommended?.rules,
      ...next.configs['core-web-vitals'].rules,
    },
  },

  // Prettier configuration (should be last)
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      prettier: prettier,
    },
    rules: {
      ...prettier.configs.recommended.rules,
      'prettier/prettier': ['error', { endOfLine: 'auto', jsxSingleQuote: true }],
    },
  },

  // Global rules
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-empty': ['error', { allowEmptyCatch: true }],
      'valid-typeof': 'warn',
    },
  },

  // Ignore patterns
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'dist/**',
      '*.css',
      '*.svg',
      'next.config.ts',
    ],
  },
];
