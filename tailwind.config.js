module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  fontFamily: {
    'serif': ['Lora'],
  },
  purge: [],
  theme: {
    extend: {
      screens: {
        'light-mode': { raw: '(prefers-color-scheme: light)' },
        'dark-mode': {raw: '(prefers-color-scheme: dark)'}
      }
    },
  },
  variants: {},
  plugins: [],
}
