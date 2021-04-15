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
        body: [
          '16px',
          {
            lineHeight: '19px',
            letterSpacing: '0.06em',
          },
        ],
        h1: [
          '36px',
          {
            textTransform: 'uppercase',
            lineHeight: '43px',
            letterSpacing: '0.06em',
          },
        ],
        h2: [
          '32px',
          {
            textTransform: 'uppercase',
            lineHeight: '38px',
            letterSpacing: '0.06em',
          },
        ],
        h3: [
          '24px',
          {
            textTransform: 'uppercase',
            lineHeight: '29px',
            letterSpacing: '0.06em',
          },
        ],
        h4: [
          '24px',
          {
            textTransform: 'uppercase',
            lineHeight: '29px',
            letterSpacing: '0.06em',
          },
        ],
        h5: {
          textTransform: 'uppercase',
          lineHeight: '22px',
          letterSpacing: '0.06em',
        },
        h6: [
          '14px',
          {
            textTransform: 'uppercase',
            lineHeight: '17px',
            letterSpacing: '0.06em',
          },
        ],
        h7: [
          '14px',
          {
            textTransform: 'uppercase',
            lineHeight: '17px',
            letterSpacing: '0.08em',
          },
        ],
        subtitle: [
          '14px',
          {
            fontFamily: 'Montserrat',
            textTransform: 'uppercase',
            lineHeight: '17px',
            letterSpacing: '0.06em',
          },
        ],
        button: [
          '14px',
          {
            textTransform: 'uppercase',
            fontWeight: 500,
            lineHeight: '17px',
            letterSpacing: '0.15em',
          },
        ],
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
        primary: 'var(--text-primary)',
        'primary-2': 'var(--text-primary-2)',
        'secondary-2': 'var(--text-secondary-2)',
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
        sm: '0.8rem',
        md: '29px',
        lg: '1.2rem',
        xl: '1.4rem',
        '2xl': '1.6rem',
        '3xl': '1.8rem',
        header: 'var(--header-height)',
        'header-lg': 'var(--header-height)',
        'responsive-xs': '0.6em',
        'responsive-sm': '0.8em',
        'responsive-md': '1em',
        'responsive-lg': '1.2em',
        'responsive-xl': '1.4em',
        'responsive-2xl': '1.6em',
        'responsive-3xl': '1.8em',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('./tailwind/plugins/nestedGroup'),
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
