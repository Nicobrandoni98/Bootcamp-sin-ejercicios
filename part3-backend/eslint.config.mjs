import globals from 'globals'
import pluginJs from '@eslint/js'
import stylisticPlugin from '@stylistic/eslint-plugin-js'

export default [
  {files: ['**/*.js'], languageOptions: {sourceType: 'commonjs'}},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  {
    plugins: { '@stylistic/js': stylisticPlugin },
    rules: {
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'never'],
    }
  }
]
