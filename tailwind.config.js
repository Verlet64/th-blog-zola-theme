module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  fontFamily: {
    'serif': ['Lora'],
  },
  purge: ["./templates/**/*.html"],
  theme: {
    extend: {
      screens: {
        'light-mode': { raw: '(prefers-color-scheme: light)' },
        'dark-mode': { raw: '(prefers-color-scheme: dark)' }
      },
      textColor: {
        'light-primary': '#444444',
        'dark-primary': '#eaeaea'
      },
      backgroundColor: {
        'light': "#fffff8",
        'dark': "#2c3039"
      }
    },
  },
  variants: {
    contentBullet: [
      'after',
    ],
    borderWidth: [
      'last'
    ]
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
  ],
}
