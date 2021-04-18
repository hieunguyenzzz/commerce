module.exports = {
  mode: 'jit',
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: {
        standard: ['outline-none'],
      },
    },
  },
  theme: {
    namedGroups: ['foo', 'bar'],
    extend: {
      fontSize: {
        xxs: '10px',
      },
      maxWidth: {
        '8xl': '1920px',
      },
      fontFamily: {},
      colors: {
        primary: 'var(--primary)',
        'primary-2': 'var(--primary-2)',
        secondary: 'var(--secondary)',
        'secondary-2': 'var(--secondary-2)',
        'accents-0': 'var(--accents-0)',
        'accents-1': 'var(--accents-1)',
        'accents-2': 'var(--accents-2)',
        'accents-3': 'var(--accents-3)',
        'accents-4': 'var(--accents-4)',
        'accents-5': 'var(--accents-5)',
        'accents-6': 'var(--accents-6)',
        'accents-7': 'var(--accents-7)',
        'accents-8': 'var(--accents-8)',
        'accents-9': 'var(--accents-9)',
      },
      textColor: {
        text: 'var(--text-base)',
      },
      boxShadow: {
        'outline-normal': '0 0 0 2px var(--accents-2)',
        magical:
          'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
      },
      lineHeight: {
        'extra-loose': '2.2',
      },
      scale: {
        120: '1.2',
      },
      spacing: {
        xs: '9px',
        sm: '18px',
        md: '29px',
        lg: '32px',
        xl: '42px',
        '2xl': '48px',
        '3xl': '56px',
        '4xl': '63px',
        header: 'var(--header-height)',
        'header-lg': 'var(--header-height)',
        'responsive-xs': '0.6em',
        'responsive-sm': '0.8em',
        'responsive-md': '1em',
        'responsive-lg': '1.2em',
        'responsive-xl': '1.4em',
        'responsive-2xl': '1.6em',
        'responsive-3xl': '1.8em',
        5.5: '22px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('./tailwind/plugins/nestedGroup'),
    require('./tailwind/plugins/typography'),
  ],
  variants: {
    extend: {
      translate: ['active', 'group-hover', 'group-focus'],
      display: ['active', 'group-hover', 'group-focus'],
      margin: ['group-hover', 'group-focus'],
      pointerEvents: ['focus', 'group-hover', 'group-focus'],
      width: ['focus', 'group-hover', 'group-focus'],
      zIndex: ['focus'],
    },
    lineClamp: ['responsive', 'hover', 'focus'],
  },
}
