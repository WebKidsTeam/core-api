// lint-staged.config.js

export default {
    'src/**/*.{ts,js}': ['eslint --fix', 'prettier --write'],
  };
  