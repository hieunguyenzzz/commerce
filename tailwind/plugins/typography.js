const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
  const typography = {
    '.text-body': {
      fontSize: '16px',
      lineHeight: '19px',
      letterSpacing: '0.06em',
    },
    '.text-h1': {
      fontSize: '36px',
      textTransform: 'uppercase',
      lineHeight: '43px',
      letterSpacing: '0.06em',
    },
    '.text-h2': {
      fontSize: '32px',
      textTransform: 'uppercase',
      lineHeight: '38px',
      letterSpacing: '0.06em',
    },
    '.text-h3': {
      fontSize: '24px',
      textTransform: 'uppercase',
      lineHeight: '29px',
      letterSpacing: '0.06em',
      fontWeight: 'bold',
    },
    '.text-h4': {
      fontSize: '24px',
      textTransform: 'uppercase',
      lineHeight: '29px',
      letterSpacing: '0.06em',
    },
    '.text-h5': {
      textTransform: 'uppercase',
      lineHeight: '22px',
      letterSpacing: '0.06em',
      fontWeight: 'bold',
    },
    '.text-h6': {
      fontSize: '14px',
      textTransform: 'uppercase',
      lineHeight: '17px',
      letterSpacing: '0.06em',
      fontWeight: 'bold',
    },
    '.text-h7': {
      fontSize: '14px',
      textTransform: 'uppercase',
      lineHeight: '17px',
      letterSpacing: '0.08em',
    },
    '.text-subtitle': {
      fontSize: '14px',
      textTransform: 'uppercase',
      lineHeight: '17px',
      letterSpacing: '0.06em',
    },
    '.text-button': {
      fontSize: '14px',
      textTransform: 'uppercase',
      fontWeight: 500,
      lineHeight: '17px',
      letterSpacing: '0.15em',
    },
  }

  addComponents(typography)
})
