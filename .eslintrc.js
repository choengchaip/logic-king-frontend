module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [],
  rules: {
    'quote-props': 'off',
    'comma-dangle': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'key-spacing': 'off',
    'object-curly-spacing': 'off',
    'lines-between-class-members': 'off',
    'camelcase': 'off',
    'vue/no-v-html': 'off',
    'vue/max-attributes-per-line': 'off',
  }
}
