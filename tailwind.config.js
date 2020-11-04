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
      },
      colors: {
        'light-heading': '#444444',
      },
      backgroundColor: {
        'light': "#fffff8",
      }
    },
  },
  variants: {},
  plugins: [],
}
