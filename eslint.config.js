import js from '@eslint/js'

import globals from 'globals'

import reactHooks from 'eslint-plugin-react-hooks'

import reactRefresh from 'eslint-plugin-react-refresh'

import pluginImport from 'eslint-plugin-import'  

import { defineConfig, globalIgnores } from 'eslint/config'



export default defineConfig([

  globalIgnores(['dist']),

  {

    files: ['**/*.{js,jsx}'],

    extends: [

      js.configs.recommended,

      reactHooks.configs['recommended-latest'],

      reactRefresh.configs.vite,

    ],

    languageOptions: {

      ecmaVersion: 2020,

      globals: globals.browser,

      parserOptions: {

        ecmaVersion: 'latest',

        ecmaFeatures: { jsx: true },

        sourceType: 'module',

      },

    },



    plugins: {

      import: pluginImport,   // plugin import

    },



    rules: {

      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      'no-undef': 'error',               // bắt biến không khai báo

      'import/no-unresolved': 'error',   // bắt import sai / thiếu file

      'import/named': 'error',           // dùng function mà chưa import

      "react/jsx-no-undef": "error"

    },

  },

])