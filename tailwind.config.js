/* docs.webb.tools config */

module.exports = {
  presets: [require('./tailwind-preset.js')],
  theme: {
    extend: {
      colors: {
        mdxYellow: {
          DEFAULT: '#FFEED6',
          dark: '#EEF300',
        },
        mdxGreen: {
          DEFAULT: '#D6FACA',
          dark: '#D4F9EC',
        },
        mdxRed: {
          DEFAULT: '#FFE1D9',
          dark: '#F2606A',
        },
        mdxLightBg: '#FAFBFC',
        webbDarkThemeGrey: '#3A424E',
        webbGray: {
          darkest: '#21232d',
        },
        webbBlue: {
          light: '#93A1F2',
          DEFAULT: '#3351F2',
          dark: '#3351F2',
        },
        webbBlackish: '#242A35',
        webbDarkest: '#181A22',
        webbDarkThemeLightGrey: '#F8FAF9',
        webbSubtleGrey: '#E0E0E0',
        webbDarkThemeBlue: '#0094FF',
        polkaPink: '#E6007A',
        transparentWhite: 'rgba(255, 255, 255, 0.1)',
        transparentDarkest: 'rgba(24, 26, 34, 0.1)',
      },
      boxShadow: {
        xxl: '0 0 25px 0 rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
