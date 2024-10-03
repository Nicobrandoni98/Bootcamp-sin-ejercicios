module.exports = {
    root: true,
    env: { 
      browser: true,
      es2020: true,
      "jest/globals": true
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended', // si usas React
    ],
    parser: 'babel-eslint',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      // Define tus reglas personalizadas aquí
    },
  }
  