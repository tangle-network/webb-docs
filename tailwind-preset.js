/* GLOBAL Webb platform preset */

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.25em',
      nav: '.15em',
    },
    extend: {
      colors: {
        webbBlue: {
          light: '#93A1F2',
          DEFAULT: '#3351F2',
          dark: '#3351F2',
        },
        webbGray: {
          light: '#F7F8F7',
          DEFAULT: '#F2F2F2',
          dark: '#3A424E',
          darkest: '#21232d',
        },
        webbWhite: '#F8FAF9',
        webbRed: '#F2606A',
        webbPurple: '#5A30B4',
        webbYellow: '#FDAB3D',
        webbDark: '#3A3E53',
        webbBlue: {
          light: '#0094FF',
          DEFAULT: '#4e8cdf',
        },
        webbBlueBg: '#EEF1FE',
        webbDarkest: '#1F1D2B',
        darkBackground: '#1F1D2B',
        bgDark: '#3A3E53',
        lightGray: '#FAFAFA',
        parityPink: '#FF1864',
        parityRed: '#CC1350',
        parityGray: '#eff1f0',
        parityBlack: '#111',
        parityWhite: '#F1F3F2',
        parityBorder: '#3c3c3c',
        buttonRed: '#ff0048',
        textDark: '#282828',
        textLight: '#757575',
        navItemColor: '#b4b5b1',
        footerDark: '#1b1b1b',
        footerLight: '#282828',
        twitter: '#00aced',
      },
      height: {
        search: '550px',
        docNav: '90vh',
        hero: '70vh',
        googleForm: '1500px',
      },
      minHeight: {
        hero: '70vh',
        heroMin: '500px',
        heroMinLg: '700px',
      },
      spacing: {
        84: '22rem',
      },
      fontFamily: {
        title: ['BreezeSans', 'sans-serif'],
        body: ['BreezeSans', 'sans-serif'],
        quote: ['serif'],
      },
      fontSize: {
        'four-oh-four': ['20rem', { lineHeight: '1' }],
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
      },
      boxShadow: {
        md: '0 0 15px 0 rgba(0, 0, 0, 0.05), 0 5px 5px -5px rgba(0, 0, 0, 0.04)',
        xl: '0 0 25px 0 rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      zIndex: {
        '-10': -10,
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(500px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-out-left': {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(500px)',
          },
        },
        'fade-out-down': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-up': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
        'fade-in': {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-right': 'fade-in-right 0.3s ease-out',
        'fade-out-left': 'fade-out-left 0.3s ease-out',
        'fade-out-down': 'fade-out-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-slow': 'fade-in 2s ease-in',
      },
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  variants: {
    fill: ['responsive', 'group-hover', 'hover', 'focus', 'active'],
    extend: {
      boxSizing: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
