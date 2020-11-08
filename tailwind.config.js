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
      textColor: {
        'light-primary': '#444444'
      },
      backgroundColor: {
        'light': "#fffff8",
      }
    },
  },
  variants: {
    contentBullet: [
      'after',
    ],
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
  ],
}
